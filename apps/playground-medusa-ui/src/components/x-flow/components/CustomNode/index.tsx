import { MoreOutlined } from '@ant-design/icons';
import { Handle, Position, useReactFlow } from '@xyflow/react';
import { Dropdown, Menu, message } from 'antd';

import { ItemType } from 'antd/es/menu/interface';
import classNames from 'classnames';
import { isFunction } from 'lodash';
import React, { memo, useCallback, useContext, useMemo, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useStore } from '../../hooks/useStore';
import { ConfigContext } from '../../models/context';
import { capitalize, isTruthy, transformNodeStatus, uuid, uuid4 } from '../../utils';
import './index.css';
import SourceHandle from './sourceHandle';
import { useFlow } from '../../hooks/useFlow';

export default memo((props: any) => {
  const { id, type, data, layout, isConnectable, selected, onClick, status } = props;
  const { widgets, settingMap, globalConfig, onMenuItemClick, antdVersion, readOnly }: any = useContext(ConfigContext);

  const deletable = globalConfig?.edge?.deletable ?? true;
  const disabledCopy = settingMap[type]?.disabledCopy ?? false;
  const disabledDelete = settingMap[type]?.disabledDelete ?? false;
  const switchExtra = settingMap[type]?.switchExtra || {};
  // const isConnectableStart = globalConfig?.handle?.isConnectableStart ?? true;
  // const isConnectableEnd = globalConfig?.handle?.isConnectableEnd ?? true;

  const NodeWidget = widgets[`${capitalize(type)}Node`] || widgets['CommonNode'];
  const [isHovered, setIsHovered] = useState(false);
  const reactflow = useReactFlow();
  const { addEdges, mousePosition } = useStore(
    (state: any) => ({
      nodes: state.nodes,
      edges: state.edges,
      mousePosition: state.mousePosition,
      addEdges: state.addEdges,
      onEdgesChange: state.onEdgesChange,
    }),
    shallow,
  );
  const { addNodes, pasteNode, copyNode, deleteNode } = useFlow();
  const isNote = type === 'Note';
  const isEnd = type === 'End';
  const isSwitchNode = type === 'Switch' || type === 'Parallel' || isNote; // Determine whether it is a conditional node/parallel node/note node
  const connectable = readOnly ? false : isConnectable;

  // Add nodes and make connections
  const handleAddNode = (data: any, sourceHandle?: string) => {
    const { screenToFlowPosition } = reactflow;
    const { x, y } = screenToFlowPosition({
      x: mousePosition.pageX + 100,
      y: mousePosition.pageY + 100,
    });
    const targetId = uuid();
    const title = settingMap[data?._nodeType]?.title || data?._nodeType;
    const newNodes = {
      id: targetId,
      type: 'custom',
      data: {
        title: `${title}_${uuid4()}`,
        ...data,
      },
      position: { x, y },
    };
    const newEdges = {
      id: uuid(),
      source: id,
      target: targetId,
      deletable,
      ...(sourceHandle && { sourceHandle }),
    };
    addNodes(newNodes as any);
    addEdges(newEdges);
  };

  let targetPosition = Position.Left;
  let sourcePosition = Position.Right;
  if (layout === 'TB') {
    targetPosition = Position.Top;
    sourcePosition = Position.Bottom;
  }

  const handleCopyNode = useCallback(() => {
    copyNode(id);
    message.success('Copy successful');
  }, [copyNode, id]);

  const handlePasteNode = useCallback(
    (data?: { sourceHandle: string }) => {
      pasteNode(id, data);
    },
    [pasteNode, id],
  );

  const handleDeleteNode = useCallback(() => {
    deleteNode(id);
  }, [deleteNode, id]);

  const defaultAction = (e: any, sourceHandle: any) => {
    if (e.key === 'copy') {
      handleCopyNode();
    } else if (e.key === 'paste') {
      handlePasteNode();
    } else if (e.key === 'delete') {
      handleDeleteNode();
    } else if (e.key.startsWith('paste-')) {
      if (sourceHandle) {
        handlePasteNode({
          sourceHandle,
        });
      } else {
        handlePasteNode();
      }
    }
  };

  const itemClick = (e: any) => {
    if (!e.key) {
      return;
    }
    const sourceHandle = e.item.props?.sourcehandle;
    if (isFunction(onMenuItemClick)) {
      const data: Record<string, string> = {
        key: e.key,
        nodeId: id,
      };
      if (type === 'Switch' && e.key.startsWith('paste-') && sourceHandle) {
        data['sourceHandle'] = sourceHandle;
      }
      onMenuItemClick(data as any, () => {
        defaultAction(e, sourceHandle);
      });
    } else {
      defaultAction(e, sourceHandle);
    }
  };

  const menuItem: ItemType[] = useMemo(() => {
    if (type === 'Switch') {
      let list = [];
      if (Array.isArray(data.list)) {
        list = data.list.map((r: any, i: any) => {
          if (i === 0) {
            return {
              label: `Paste to the ${i + 1}th exit`,
              key: 'paste-' + i,
              index: i,
              id: id,
              sourcehandle: r._id,
            };
          } else {
            return {
              label: `Paste to the ${i + 1}th exit`,
              key: 'paste-' + i,
              id: id,
              index: i,
              sourcehandle: r._id,
            };
          }
        });
      }
      const defaultElse = switchExtra?.hideElse
        ? []
        : [
            {
              label: `Paste to the ${list.length + 1}th exit`,
              key: 'paste-' + (list.length + 1),
              id: id,
              index: list.length + 1,
              sourcehandle: 'id_else',
            },
          ];
      return [...list, ...defaultElse];
    }
    return [
      {
        label: 'Paste',
        key: 'paste',
      },
    ];
  }, [type, data, isEnd]);

  // Node status processing
  const statusObj: any = transformNodeStatus(globalConfig?.nodeView?.status || []);
  const nodeBorderColor: any = statusObj[status]?.color;

  const menu = (
    <Menu onClick={itemClick}>
      <Menu.Item key={'copy'} disabled={disabledCopy}>
        copy
      </Menu.Item>
      {!isEnd
        ? menuItem.map((r: any) => {
            return (
              <Menu.Item {...r} key={r.key}>
                {r.label}
              </Menu.Item>
            );
          })
        : null}
      <Menu.Item key={'delete'} danger={true} disabled={disabledDelete}>
        delete
      </Menu.Item>
    </Menu>
  );

  const dropdownVersionProps = useMemo(() => {
    if (antdVersion === 'V5') {
      return {
        menu: {
          items: [
            {
              label: 'Copy',
              key: 'copy',
              disabled: disabledCopy,
            },
            ...(isEnd ? [] : menuItem),
            {
              label: 'Delete',
              key: 'delete',
              danger: true,
              disabled: disabledDelete,
            },
          ],
          onClick: itemClick,
        },
      };
    }
    // V4
    return {
      overlay: menu,
    };
  }, [menuItem, isEnd]);
  return (
    <div
      className={classNames('xflow-node-container', {
        ['xflow-node-container-selected']: !!selected,
        ['xflow-node-container-tb']: layout === 'TB',
        ['xflow-node-container-note']: isNote,
        [`xflow-node-container-status-${status}`]: isTruthy(status),
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--nodeBorderColor': nodeBorderColor } as React.CSSProperties}
    >
      {!settingMap?.[type]?.targetHandleHidden && !isNote && (
        <Handle
          type="target"
          position={targetPosition}
          isConnectable={connectable}
          // isConnectableStart={isConnectableStart}
          // isConnectableEnd={isConnectableEnd}
        />
      )}
      {!readOnly && (
        <Dropdown
          disabled={readOnly}
          {...dropdownVersionProps}
          //trigger={['click', 'contextMenu']}
        >
          <div className="xflow-node-actions-container">
            <MoreOutlined style={{ transform: 'rotateZ(90deg)', fontSize: '20px' }}></MoreOutlined>
          </div>
        </Dropdown>
      )}
      <NodeWidget
        id={id}
        type={type}
        data={data}
        onClick={() => onClick(data)}
        position={sourcePosition}
        isConnectable={connectable}
        selected={selected}
        isHovered={isHovered}
        handleAddNode={handleAddNode}
      />
      {!settingMap?.[type]?.sourceHandleHidden && !isSwitchNode && (
        <>
          <SourceHandle
            position={sourcePosition}
            isConnectable={connectable}
            selected={selected}
            isHovered={isHovered}
            handleAddNode={handleAddNode}
            // isConnectableStart={isConnectableStart}
            // isConnectableEnd={isConnectableEnd}
          />
        </>
      )}
    </div>
  );
});

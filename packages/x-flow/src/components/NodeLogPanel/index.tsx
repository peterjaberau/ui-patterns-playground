import { Empty, Spin, Tabs } from 'antd';
import { FC, useContext } from 'react';
import { ConfigContext } from '../../models/context';
import DetailPanel from './components/DetailPanel';
import TrackPanel from './components/TrackPanel';
import './index.css';
import { isArray } from 'lodash';

interface INodeEditorProps {
  data: any;
  onChange: (data: any) => void;
  nodeType: string;
  id: string;
  node: any;
  onTrackCollapseChange: (data: any) => void; // Tracking panel click collapse method
}

const NodeLogPanel: FC<INodeEditorProps> = (props: any) => {
  const { data, onChange, nodeType, id, node, onTrackCollapseChange } = props;
  const { widgets, globalConfig, logPanel } = useContext(ConfigContext);
  const {
    nodeView: { status = [] },
  } = globalConfig;
  const CustomWidget = widgets[logPanel?.logWidget]; // Built-in setting component
  const logData = isArray(logPanel?.logList)
    ? (logPanel?.logList || [])?.find((item) => item?.nodeId === id)
    : logPanel?.logList;

  if (logPanel?.logWidget && CustomWidget) {
    return <CustomWidget logList={logPanel?.logList} node={node} />;
  } else {
    return (
      <div className="node-log-container">
        <Spin spinning={Boolean(logPanel?.loading)}>
          <Tabs size="small" className="log-header-tab">
            <Tabs.TabPane tab="Details" key="detail">
              {logData ? (
                <DetailPanel currentStatus={node?._status} detailData={logData} />
              ) : (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description="No log information yet"
                  style={{ fontSize: '12px' }}
                />
              )}
            </Tabs.TabPane>
            <Tabs.TabPane tab="Track" key="track">
              <TrackPanel logList={logPanel?.logList || []} onTrackCollapseChange={onTrackCollapseChange} />
            </Tabs.TabPane>
          </Tabs>
        </Spin>
      </div>
    );
  }
};

export default NodeLogPanel;

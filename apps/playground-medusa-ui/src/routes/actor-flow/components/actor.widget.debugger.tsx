'use client';
import { useFlowActorSelector } from '@/routes/actor-flow/components/flow-machine/context';
import { Container, Heading } from '@medusajs/ui';
import { Button, Scrollable } from '@shopify/polaris';
import { SearchListIcon } from '@shopify/polaris-icons';
import { useState } from 'react';
import { useNodes, useEdges, useFlow } from '@/components/x-flow';
import JsonView from 'react18-json-view';

const tabs = [
  {
    id: 'dev-tools',
    content: 'Dev tools',
  },
  {
    id: 'dev-xray',
    content: 'Dev xRay',
  },
  {
    id: 'flow-watch',
    content: 'Flow watch',
  },
  {
    id: 'flow-state',
    content: 'Flow state',
  },
  {
    id: 'flow-context',
    content: 'Flow context',
  },
];

const nodesInpector = (nodes: any) => {
  return nodes.map((node: any) => {
    const { position, id } = node;
    return {
      id,
      position,
    };
  });
};

export const ActorWidgetDebugger = () => {
  const [selectedTab, setSelectedTab] = useState('dev-tools');
  const [selectedState, selectSelectedState] = useState(selectedTab);
  const nodes = useNodes();
  const edges = useEdges();
  const flow = useFlow();

  const debuggerPayload = useFlowActorSelector((snapshot) => {
    switch (selectedTab) {
      case 'dev-tools':
        return nodesInpector(nodes);
      case 'dev-xray':
        return {
          nodes: nodes,
          edges: edges,
          flow: flow,
        };
      case 'flow-watch':
        return snapshot.context.flow;
      case 'flow-state':
        return snapshot;
      case 'flow-context':
        return snapshot.context;
      default:
        return snapshot.value;
    }
  });

  return (
    <>
      <Container className="h-full divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>Debugger</Heading>
          <div className="flex items-center gap-x-2">
            {tabs.map((tab) => (
              <Button
                pressed={selectedTab === tab.id}
                key={tab.id}
                icon={SearchListIcon}
                onClick={() => {
                  setSelectedTab(tab.id);
                }}
              >
                {tab.content}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-center p-4">
          <div style={{ height: '800px', width: '100%', position: 'relative' }}>
            <Scrollable style={{ height: '100%' }} focusable scrollbarGutter="stable" scrollbarWidth="thin">
              <JsonView
                src={debuggerPayload}
                collapsed={3}
                displaySize={true}
                collapseStringMode="directly"
                editable
                onAdd={(params) => {
                  console.log('[jv onAdd]', params);
                }}
                onEdit={(params) => {
                  console.log('[jv onEdit]', params);
                }}
                onDelete={(params) => {
                  console.log('[jv onDelete]', params);
                }}
                // collapsed={(params) => {
                //   if (params.indexOrName === 'arr') return true;
                //   if (params.depth > 3) return true;
                //   if (params.depth > 2 && params.size > 3) return true;
                //   if (params.node && typeof params.node === 'object') return true;
                //   return false;
                // }}
                ignoreLargeArray
                collapseObjectsAfterLength={Infinity}
              />
            </Scrollable>
          </div>
        </div>
      </Container>
    </>
  );
};

/*

 <JsonView
 src={debuggerPayload}
 displaySize={true}
 customizeNode={(params) => {
 if (params.indexOrName === 'obj') return { add: false, delete: false, enableClipboard: false };
 if (params.node === 'no-clipboard') return { enableClipboard: false };
 if (params.node === 'non-delete') return { delete: false };
 if (params.node === 'non-editable') return { add: false, delete: false, edit: false };
 if (params.indexOrName === 'arr') return { collapsed: false };
 if (params.depth > 2) return { collapsed: true };
 if (params.indexOrName === 'className') return { className: 'underline' };
 if (params.indexOrName === 'collapsed') return { collapsed: true };
 if (params.node === 'count')
 return () => {
 const [count, setCount] = useState(0);

 return (
 <span>
 {count}
 <button onClick={() => setCount(count + 1)} className="ml-1 border px-1 py-0.5">
 add
 </button>
 </span>
 );
 };
 if (typeof params.node === 'string' && params.node.startsWith('https://'))
 return (
 <a href={params.node} target="_blank" className="text-sky-500 hover:underline">
 {params.node}
 </a>
 );
 }}
 collapseStringMode="directly"
 editable
 onAdd={(params) => {
 console.log('[jv onAdd]', params);
 }}
 onEdit={(params) => {
 console.log('[jv onEdit]', params);
 }}
 onDelete={(params) => {
 console.log('[jv onDelete]', params);
 }}
 // collapsed={(params) => {
 //   if (params.indexOrName === 'arr') return true;
 //   if (params.depth > 3) return true;
 //   if (params.depth > 2 && params.size > 3) return true;
 //   if (params.node && typeof params.node === 'object') return true;
 //   return false;
 // }}
 ignoreLargeArray
 collapseObjectsAfterLength={Infinity}
 />




 */

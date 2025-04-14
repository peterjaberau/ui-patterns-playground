import React, { useState } from 'react';
import {
  Icon,
  Card,
  Button,
  TextField,
  Listbox,
  AutoSelection,
  Scrollable,
  EmptySearchResult,
  Box,
  InlineStack,
} from '@shopify/polaris';
import { SearchIcon, PlusIcon } from '@shopify/polaris-icons';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import { useContext } from 'react';
import { useSelector } from '@xstate/react';
import empty from '../../examples/empty.json';
import aiPrompt from '../../examples/aiPrompt.json';
import ethCall from '../../examples/ethcall.json';
import getUint256 from '../../examples/getUint256.json';
import median from '../../examples/median.json';

const reactFlowInstanceSelector = (state: any) => state.context.reactFlowInstance;

const segments = [
  {
    label: 'Empty Project',
    id: 'empty',
    value: 'empty',
  },
  {
    label: 'AI Prompt',
    id: 'aiPrompt',
    value: 'aiPrompt',
  },
  {
    label: 'ETH Call',
    id: 'ethCall',
    value: 'ethCall',
  },
  {
    label: 'Get -> Uint256',
    id: 'getUint256',
    value: 'getUint256',
  },
  {
    label: 'Median Answer',
    id: 'median',
    value: 'median',
  },
];
const segmentsRegister: any = {
  empty: empty,
  aiPrompt: aiPrompt,
  ethCall: ethCall,
  getUint256: getUint256,
  median: median,
};
export function Examples() {
  const globalServices = useContext(GlobalStateContext);

  const reactFlowInstance = useSelector(globalServices.workspaceService, reactFlowInstanceSelector);

  const [query, setQuery] = useState<string>('');
  const [visibleOptionIndex, setVisibleOptionIndex] = useState(segments.length > 0 ? segments.length : 0);
  const [activeOptionId, setActiveOptionId] = useState(segments[0].id);
  const [selectSelectedValue, setSelectSelectedValue]: any = useState(null);
  const [filteredSegments, setFilteredSegments] = useState<(typeof segments)[number][]>([]);

  const handleFilterSegments = (query: any) => {
    const nextFilteredSegments = segments.filter((segment) => {
      return segment.label.toLocaleLowerCase().includes(query.toLocaleLowerCase().trim());
    });

    setFilteredSegments(nextFilteredSegments);
  };

  const handleQueryChange = (query: any) => {
    setQuery(query);

    if (query.length >= 2) handleFilterSegments(query);
  };

  const handleQueryClear = () => {
    handleQueryChange('');
  };

  const handleRehydrate = (json: any) => {
    globalServices.workspaceService.send({
      type: 'RESTORE_STATE',
      savedContext: json,
    });
    setTimeout(
      () =>
        reactFlowInstance.fitView({
          duration: 500,
          padding: 1,
        }),
      100,
    );
  };

  const handleImportClick = () => {
    globalServices.workspaceService.send({
      type: 'OPEN_MODAL',
      name: 'import',
    });
  };

  const handleSegmentSelect = (value: string) => {
    setSelectSelectedValue(value);
    handleRehydrate(segmentsRegister[value]);
  };

  const handleActiveOptionChange = (_: string, domId: string) => {
    setActiveOptionId(domId);
  };

  const textFieldMarkup = (
    <div style={{ padding: '12px' }}>
      <TextField
        clearButton
        labelHidden
        label="Customer segments"
        placeholder="Search segments"
        autoComplete="off"
        value={query}
        prefix={<Icon source={SearchIcon} />}
        ariaActiveDescendant={activeOptionId}
        onChange={handleQueryChange}
        onClearButtonClick={handleQueryClear}
      />
    </div>
  );

  const segmentOptions = query ? filteredSegments : segments;

  const segmentList =
    segmentOptions.length > 0
      ? segmentOptions.slice(0, visibleOptionIndex).map(({ label, id, value }, index) => {
          const selected = segments[index].value === selectSelectedValue;

          return (
            <Listbox.Option key={id} value={value} selected={selected}>
              <Listbox.TextOption selected={selected}>{label}</Listbox.TextOption>
            </Listbox.Option>
          );
        })
      : null;

  const noResultsMarkup =
    segmentOptions.length === 0 ? (
      <EmptySearchResult title="" description={`No segments found matching "${query}"`} />
    ) : null;

  return (
    <div>
      {textFieldMarkup}
      <Scrollable
        shadow
        style={{
          position: 'relative',
          height: '200px',
          padding: 'var(--p-space-200) 0',
        }}
      >
        <Listbox
          enableKeyboardControl
          autoSelection={AutoSelection.FirstSelected}
          accessibilityLabel="Search for and select a flow segment"
          onSelect={handleSegmentSelect}
          onActiveOptionChange={handleActiveOptionChange}
        >
          {segmentList}
          {noResultsMarkup}
        </Listbox>
      </Scrollable>
      <Box paddingBlockEnd="400">
        <InlineStack align="center">
          <Button onClick={handleImportClick}>Import an existing job spec</Button>
        </InlineStack>
      </Box>
    </div>
  );
}

import { Button, Container, IconButton } from '@medusajs/ui';
import { RadioCards, RadioCardsItem, Badge } from '@codefast/ui';
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardFooter, CardAction, CardDescription } from '@codefast/ui';
import {
  EuiFlexGroup,
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
  EuiModalFooter,
  EuiModalHeaderTitle,
  EuiButtonEmpty,
  EuiBadge,
} from '@elastic/eui';
import useInfiniteScroll from 'react-infinite-scroll-hook';

import { ResourcePickerRefProvider, useResourcePickerRefContext, useResourcePickerRefSelector } from './context';
import { ActorRefFrom } from 'xstate';

interface LibraryItemProps {
  resourceItem: any;
  onSelect: (selected: boolean) => void;
  isSelected: boolean;

  mode: 'resource-item' | 'card';
}

export const LibraryItem: React.FC<LibraryItemProps> = ({ resourceItem, onSelect, isSelected, mode }) => {
  const resourceItemTitle = typeof resourceItem.title === 'string' ? resourceItem.title : resourceItem.title['en-US'];

  const resourceItemDescription =
    resourceItem.resourceNamespace === 'library'
      ? resourceItem.description == null
        ? ''
        : resourceItem.description['en-US']
      : '';
  return (
    <>
      <Card className={isSelected ? 'bg-red-500' : 'bg-white'} onClick={() => onSelect(!isSelected)}>
        <CardHeader>
          <div className="flex w-full flex-row">
            <div className="flex flex-grow-0">
              <img width={50} height={50} src={resourceItem.mainImageSrc} alt={resourceItemTitle} />
            </div>
            <div className="flex-grow-1 flex">
              <CardTitle>{resourceItemTitle}</CardTitle>
              <CardDescription>{resourceItemDescription}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {resourceItem.resourceNamespace === 'library' &&
              resourceItem.tags?.map((tag: any) => {
                return (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                );
              })}
          </div>
          <div className="font-medium tabular-nums">mode: ${mode}</div>
        </CardFooter>
      </Card>
    </>
  );
};

export const ResourceItems = () => {
  const resourceItems = useResourcePickerRefSelector((state) => state.context.currentResources);
  const selectedItems = useResourcePickerRefSelector((state) => state.context.selectedItems);
  const uiSettings = useResourcePickerRefSelector((state) => state.context.uiSettings);
  const { send } = useResourcePickerRefContext();
  return resourceItems.map((resourceItem: any) => {
    return (
      <>
        <LibraryItem
          key={resourceItem.id}
          mode={uiSettings.resourceUiMode}
          resourceItem={resourceItem}
          isSelected={selectedItems.has(resourceItem.id)}
          onSelect={(selected) => {
            if (selected) {
              send({
                type: 'library.item.select',
                payload: {
                  itemId: resourceItem.id,
                },
              });
              return;
            }

            send({
              type: 'library.item.unselect',
              payload: {
                itemId: resourceItem.id,
              },
            });
          }}
        />
      </>
    );
  });
};

export const ResourcePickerMain = () => {
  const { send } = useResourcePickerRefContext();
  const isLoading = useResourcePickerRefSelector((state) => state.matches({ Open: 'Loading' }));
  const isLoadMore = useResourcePickerRefSelector((state) => state.matches({ Open: { LoadMore: 'Retrieved' } }));

  // const uiSettings = useResourcePickerRefSelector((state) => state.context.uiSettings)

  const hasNextPage = useResourcePickerRefSelector((state) => state.context.currentPageInfo.hasNextPage);

  const [intersectionRef, { rootRef }] = useInfiniteScroll({
    loading: isLoading || isLoadMore,
    hasNextPage: hasNextPage,

    onLoadMore: () => {
      send({
        type: 'library.items.loadMore',
      } as any);
    },
    // disabled: !!error,
    rootMargin: '0px 0px 20px 0px',
  });

  if (isLoading) {
    return (
      <EuiFlexGroup alignItems={'center'} justifyContent={'center'}>
        <EuiButtonEmpty size={'xs'} iconSide={'right'}>
          Loading
        </EuiButtonEmpty>
      </EuiFlexGroup>
    );
  }

  return (
    <div ref={rootRef}>
      <ResourceItems />
      {(isLoadMore || hasNextPage) && (
        <EuiFlexGroup ref={intersectionRef} id={'bottom-library'} alignItems={'center'} justifyContent={'center'}>
          <EuiButtonEmpty size={'xs'} iconSide={'right'}>
            Loading
          </EuiButtonEmpty>
        </EuiFlexGroup>
      )}
    </div>
  );
};

export const ResourcePicker = () => {
  const state = useResourcePickerRefSelector((state) => state.value);
  const resourceType = useResourcePickerRefSelector((state) => state.context.resourceSettings.resourceType);

  // const uiSettings = useResourcePickerRefSelector((state) => state.context.uiSettings)
  const resourceSettings = useResourcePickerRefSelector((state) => state.context.resourceSettings);
  const { send } = useResourcePickerRefContext();

  console.log('ResourcePicker', {
    resourceSettings: resourceSettings,
    resourceType: resourceType,
    state: state,
  });

  return (
    <>
      {state !== 'Closed' && (
        <EuiModal
          onClose={() => {
            send({ type: 'close' } as any);
          }}
          style={{ width: '1000px', height: '600px' }}
        >
          <EuiModalHeader>
            <EuiModalHeaderTitle>
              Select your {`${resourceType}${resourceSettings.selectionType === 'multiple' ? 's' : ''}`}
            </EuiModalHeaderTitle>
          </EuiModalHeader>
          <EuiModalBody>
            <ResourcePickerMain />
          </EuiModalBody>
          <EuiModalFooter>
            {resourceSettings.selectionType === 'multiple' && (
              <Button
                onClick={() => {
                  send({ type: 'library.done' } as any);
                }}
              >
                Select
              </Button>
            )}
          </EuiModalFooter>
        </EuiModal>
      )}
    </>
  );
};

export const ResourcePickerProvider: React.FC<{
  actorRef: ActorRefFrom<any>;
}> = ({ actorRef }) => (
  <ResourcePickerRefProvider value={actorRef as any}>
    <ResourcePicker />
  </ResourcePickerRefProvider>
);

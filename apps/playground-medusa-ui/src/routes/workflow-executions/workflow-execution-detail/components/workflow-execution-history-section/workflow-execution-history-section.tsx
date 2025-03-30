'use client';
import { Spinner, TriangleDownMini } from '@medusajs/icons';
import { HttpTypes } from '@medusajs/types';
import { clx, CodeBlock, Container, Heading, IconButton, Text } from '@medusajs/ui';
import { format } from 'date-fns';
import { Collapsible as RadixCollapsible } from 'radix-ui';
import { useEffect, useRef, useState } from 'react';
import {
  STEP_ERROR_STATES,
  STEP_IN_PROGRESS_STATES,
  STEP_INACTIVE_STATES,
  STEP_OK_STATES,
  STEP_SKIPPED_STATES,
} from '../../../constants';
import { TransactionStepState, TransactionStepStatus } from '../../../types';
import { usePathname, useSearchParams } from 'next/navigation';

type WorkflowExecutionHistorySectionProps = {
  execution: HttpTypes.AdminWorkflowExecution | any;
};

export const WorkflowExecutionHistorySection = ({ execution }: WorkflowExecutionHistorySectionProps) => {
  const map: any = Object.values(execution.execution?.steps || {});
  const steps: any = map.filter((step: any) => step.id !== '_root');

  // check if any of the steps have a .invoke.state of "permanent_failure" and if that is the case then return its id
  const unreachableStepId: any = steps.find(
    (step: any) => step.invoke.status === TransactionStepStatus.PERMANENT_FAILURE,
  )?.id;

  // return an array of step ids of all steps that come after the unreachable step if there is one
  const unreachableSteps = unreachableStepId
    ? steps
        .filter((step: any) => step.id !== unreachableStepId && step.id.includes(unreachableStepId))
        .map((step: any) => step.id)
    : [];

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">{'History'}</Heading>
      </div>
      <div className="flex flex-col gap-y-0.5 px-6 py-4">
        {steps.map((step: any, index: any) => {
          const stepId = step.id.split('.').pop();

          if (!stepId) {
            return null;
          }

          const context = execution.context?.data.invoke[stepId];
          const error = execution.context?.errors.find((e: any) => e.action === stepId);

          return (
            <Event
              key={step.id}
              step={step}
              stepInvokeContext={context}
              stepError={error}
              isLast={index === steps.length - 1}
              isUnreachable={unreachableSteps.includes(step.id)}
            />
          );
        })}
      </div>
    </Container>
  );
};

const Event = ({
  step,
  stepInvokeContext,
  stepError,
  isLast,
  isUnreachable,
}: {
  step: HttpTypes.AdminWorkflowExecutionStep;
  stepInvokeContext: HttpTypes.StepInvokeResult | undefined;
  stepError?: HttpTypes.StepError | undefined;
  isLast: boolean;
  isUnreachable?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen]: any = useState(false);
  const stepId = step.id.split('.').pop()!;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Extract hash manually from the URL
  const hash = typeof window !== 'undefined' ? window.location.hash : '';

  useEffect(() => {
    if (hash === `#${stepId}`) {
      setOpen(true);
    }
  }, [hash, stepId]);

  const identifier = step.id.split('.').pop();

  //
  // const { hash } = useLocation();
  //
  // const { t } = useTranslation();
  //
  // const stepId = step.id.split('.').pop()!;
  //
  // useEffect(() => {
  //   if (hash === `#${stepId}`) {
  //     setOpen(true);
  //   }
  // }, [hash, stepId]);
  //
  // const identifier = step.id.split('.').pop();

  return (
    <div className="grid grid-cols-[20px_1fr] items-start gap-x-2 px-2" id={stepId}>
      <div className="grid h-full grid-rows-[20px_1fr] items-center justify-center gap-y-0.5">
        <div className="flex size-5 items-center justify-center">
          <div className="bg-ui-bg-base shadow-borders-base flex size-2.5 items-center justify-center rounded-full">
            <div
              className={clx('size-1.5 rounded-full', {
                'bg-ui-tag-neutral-bg': STEP_SKIPPED_STATES.includes(step.invoke.state),
                'bg-ui-tag-green-icon': STEP_OK_STATES.includes(step.invoke.state),
                'bg-ui-tag-orange-icon': STEP_IN_PROGRESS_STATES.includes(step.invoke.state),
                'bg-ui-tag-red-icon': STEP_ERROR_STATES.includes(step.invoke.state),
                'bg-ui-tag-neutral-icon': STEP_INACTIVE_STATES.includes(step.invoke.state),
              })}
            />
          </div>
        </div>
        <div className="flex h-full flex-col items-center">
          <div
            aria-hidden
            role="presentation"
            className={clx({
              'bg-ui-border-base h-full min-h-[14px] w-px': !isLast,
            })}
          />
        </div>
      </div>
      <RadixCollapsible.Root open={open} onOpenChange={setOpen}>
        <RadixCollapsible.Trigger asChild>
          <div className="group flex cursor-pointer items-start justify-between outline-none">
            <Text size="small" leading="compact" weight="plus">
              {identifier}
            </Text>
            <div className="flex items-center gap-x-2">
              <StepState state={step.invoke.state} startedAt={step.startedAt} isUnreachable={isUnreachable} />
              <IconButton size="2xsmall" variant="transparent">
                <TriangleDownMini className="text-ui-fg-muted transition-transform group-data-[state=open]:rotate-180" />
              </IconButton>
            </div>
          </div>
        </RadixCollapsible.Trigger>
        <RadixCollapsible.Content ref={ref}>
          <div className="flex flex-col gap-y-2 pb-4 pt-2">
            <div className="text-ui-fg-subtle flex flex-col gap-y-2">
              <Text size="small" leading="compact">
                {'Definition'}
              </Text>
              <CodeBlock
                snippets={[
                  {
                    code: JSON.stringify(step.definition, null, 2),
                    label: 'Definition',
                    language: 'json',
                    hideLineNumbers: true,
                  },
                ]}
              >
                <CodeBlock.Body />
              </CodeBlock>
            </div>
            {stepInvokeContext && (
              <div className="text-ui-fg-subtle flex flex-col gap-y-2">
                <Text size="small" leading="compact">
                  {'Output'}
                </Text>
                <CodeBlock
                  snippets={[
                    {
                      code: JSON.stringify(
                        // TODO: Apply resolve value: packages/core/workflows-sdk/src/utils/composer/helpers/resolve-value.ts
                        stepInvokeContext?.output?.output ?? {},
                        null,
                        2,
                      ),
                      label: 'Output',
                      language: 'json',
                      hideLineNumbers: true,
                    },
                  ]}
                >
                  <CodeBlock.Body />
                </CodeBlock>
              </div>
            )}
            {!!stepInvokeContext?.output?.compensateInput &&
              step.compensate.state === TransactionStepState.REVERTED && (
                <div className="text-ui-fg-subtle flex flex-col gap-y-2">
                  <Text size="small" leading="compact">
                    {'Compensate input'}
                  </Text>
                  <CodeBlock
                    snippets={[
                      {
                        // TODO: Apply resolve value: packages/core/workflows-sdk/src/utils/composer/helpers/resolve-value.ts
                        code: JSON.stringify(stepInvokeContext?.output?.compensateInput ?? {}, null, 2),
                        label: 'Compensate input',
                        language: 'json',
                        hideLineNumbers: true,
                      },
                    ]}
                  >
                    <CodeBlock.Body />
                  </CodeBlock>
                </div>
              )}
            {stepError && (
              <div className="text-ui-fg-subtle flex flex-col gap-y-2">
                <Text size="small" leading="compact">
                  {'Error'}
                </Text>
                <CodeBlock
                  snippets={[
                    {
                      code: JSON.stringify(
                        {
                          error: stepError.error,
                          handlerType: stepError.handlerType,
                        },
                        null,
                        2,
                      ),
                      label: 'Error',
                      language: 'json',
                      hideLineNumbers: true,
                    },
                  ]}
                >
                  <CodeBlock.Body />
                </CodeBlock>
              </div>
            )}
          </div>
        </RadixCollapsible.Content>
      </RadixCollapsible.Root>
    </div>
  );
};

const StepState = ({
  state,
  startedAt,
  isUnreachable,
}: {
  state: HttpTypes.TransactionStepState;
  startedAt?: number | null;
  isUnreachable?: boolean;
}) => {
  const isFailed = state === TransactionStepState.FAILED;
  const isRunning = state === TransactionStepState.INVOKING;
  const isSkipped = state === TransactionStepState.SKIPPED;
  const isSkippedFailure = state === TransactionStepState.SKIPPED_FAILURE;

  if (isUnreachable) {
    return null;
  }

  if (isRunning) {
    return (
      <div className="flex items-center gap-x-1">
        <Text size="small" leading="compact" className="text-ui-fg-subtle">
          Running...
        </Text>
        <Spinner className="text-ui-fg-interactive animate-spin" />
      </div>
    );
  }

  let stateText: string | undefined;

  if (isSkipped) {
    stateText = 'Skipped';
  } else if (isSkippedFailure) {
    stateText = 'Skipped (Failure)';
  } else if (isFailed) {
    stateText = 'Failed';
  }

  if (stateText !== null) {
    return (
      <Text size="small" leading="compact" className="text-ui-fg-subtle">
        {stateText}
      </Text>
    );
  }

  if (startedAt) {
    return (
      <Text size="small" leading="compact" className="text-ui-fg-muted">
        {format(startedAt, 'dd MMM yyyy HH:mm:ss')}
      </Text>
    );
  }
};

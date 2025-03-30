import { HttpTypes } from '@medusajs/types';
import {
  STEP_ERROR_STATES,
  STEP_INACTIVE_STATES,
  STEP_IN_PROGRESS_STATES,
  TRANSACTION_ERROR_STATES,
  TRANSACTION_IN_PROGRESS_STATES,
} from './constants';
import { TransactionState, TransactionStepState } from './types';

export const adminExecutionKey = {
  detail: (id: string) => ['workflow_executions', 'detail', id],
  list: (query?: HttpTypes.AdminGetWorkflowExecutionsParams) => ['workflow_executions', 'list', { query }],
};

export const getTransactionStateColor = (state: TransactionState): 'green' | 'orange' | 'red' => {
  let statusColor: 'green' | 'red' | 'orange' = 'green';

  if (TRANSACTION_ERROR_STATES.includes(state)) {
    statusColor = 'red';
  }

  if (TRANSACTION_IN_PROGRESS_STATES.includes(state)) {
    statusColor = 'orange';
  }

  return statusColor;
};

export const getTransactionState = (state: TransactionState) => {
  switch (state) {
    case TransactionState.DONE:
      return 'Done';
    case TransactionState.FAILED:
      return 'Failed';
    case TransactionState.REVERTED:
      return 'Reverted';
    case TransactionState.INVOKING:
      return 'Invoking';
    case TransactionState.WAITING_TO_COMPENSATE:
      return 'Waiting to compensate';
    case TransactionState.COMPENSATING:
      return '';
    case TransactionState.NOT_STARTED:
      return 'Not started';
  }
};

export const getStepStateColor = (state: TransactionStepState) => {
  let statusColor: 'green' | 'red' | 'orange' | 'grey' = 'green';

  if (STEP_ERROR_STATES.includes(state)) {
    statusColor = 'red';
  }

  if (STEP_INACTIVE_STATES.includes(state)) {
    statusColor = 'grey';
  }

  if (STEP_IN_PROGRESS_STATES.includes(state)) {
    statusColor = 'orange';
  }

  return statusColor;
};

export const getStepState = (state: TransactionStepState) => {
  switch (state) {
    case TransactionStepState.DONE:
      return 'Done';
    case TransactionStepState.FAILED:
      return 'Failed';
    case TransactionStepState.REVERTED:
      return 'Reverted';
    case TransactionStepState.INVOKING:
      return 'Invoking';
    case TransactionStepState.COMPENSATING:
      return 'Compensating';
    case TransactionStepState.NOT_STARTED:
      return 'Not started';
    case TransactionStepState.SKIPPED:
      return 'Skipped';
    case TransactionStepState.SKIPPED_FAILURE:
      return 'Skipped failure';
    case TransactionStepState.DORMANT:
      return 'Dormant';
    case TransactionStepState.TIMEOUT:
      return 'Timeout';
  }
};

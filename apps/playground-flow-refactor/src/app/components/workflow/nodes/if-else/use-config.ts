import { useCallback, useMemo } from "react";
import produce from "immer";
import { v4 as uuid4 } from "uuid";
import { useUpdateNodeInternals } from "reactflow";
import type { Var } from "../../types";
import { VarType } from "../../types";
import { LogicalOperator } from "./types";
import type {
  CaseItem,
  HandleAddCondition,
  HandleAddSubVariableCondition,
  HandleRemoveCondition,
  HandleToggleConditionLogicalOperator,
  HandleToggleSubVariableConditionLogicalOperator,
  HandleUpdateCondition,
  HandleUpdateSubVariableCondition,
  IfElseNodeType,
} from "./types";
import { branchNameCorrect, getOperators } from "./utils";
import useNodeCrud from "@/app/components/workflow/nodes/_base/hooks/use-node-crud";
import { useEdgesInteractions, useNodesReadOnly } from "@/app/components/workflow/hooks";
import useAvailableVarList from "@/app/components/workflow/nodes/_base/hooks/use-available-var-list";

const useConfig = (id: string, payload: IfElseNodeType) => {
  const updateNodeInternals = useUpdateNodeInternals();
  const { nodesReadOnly: readOnly }: any = useNodesReadOnly();
  const { handleEdgeDeleteByDeleteBranch } = useEdgesInteractions();
  const { inputs, setInputs } = useNodeCrud<IfElseNodeType>(id, payload);

  const filterVar = useCallback(() => {
    return true;
  }, []);

  const { availableVars, availableNodesWithParent } = useAvailableVarList(id, {
    onlyLeafNodeVar: false,
    filterVar,
  });

  const handleToggleConditionLogicalOperator = useCallback<HandleToggleConditionLogicalOperator>(
    (caseId) => {
      const newInputs = produce(inputs, (draft) => {
        const targetCase = draft.cases?.find((item) => item.case_id === caseId);
        if (targetCase)
          targetCase.logical_operator =
            targetCase.logical_operator === LogicalOperator.and ? LogicalOperator.or : LogicalOperator.and;
      });
      setInputs(newInputs);
    },
    [inputs, setInputs]
  );

  const handleAddSubVariableCondition = useCallback<HandleAddSubVariableCondition>(
    (caseId: string, conditionId: string, key?: string) => {
      const newInputs = produce(inputs, (draft) => {
        const condition = draft.cases
          ?.find((item) => item.case_id === caseId)
          ?.conditions.find((item) => item.id === conditionId);
        if (!condition) return;
        if (!condition?.sub_variable_condition) {
          condition.sub_variable_condition = {
            case_id: uuid4(),
            logical_operator: LogicalOperator.and,
            conditions: [],
          };
        }
        const subVarCondition = condition.sub_variable_condition;
        if (subVarCondition) {
          if (!subVarCondition.conditions) subVarCondition.conditions = [];

          subVarCondition.conditions.push({
            id: uuid4(),
            key: key || "",
            varType: VarType.string,
            comparison_operator: undefined,
            value: "",
          });
        }
      });
      setInputs(newInputs);
    },
    [inputs, setInputs]
  );

  const handleRemoveSubVariableCondition = useCallback(
    (caseId: string, conditionId: string, subConditionId: string) => {
      const newInputs = produce(inputs, (draft) => {
        const condition = draft.cases
          ?.find((item) => item.case_id === caseId)
          ?.conditions.find((item) => item.id === conditionId);
        if (!condition) return;
        if (!condition?.sub_variable_condition) return;
        const subVarCondition = condition.sub_variable_condition;
        if (subVarCondition)
          subVarCondition.conditions = subVarCondition.conditions.filter((item) => item.id !== subConditionId);
      });
      setInputs(newInputs);
    },
    [inputs, setInputs]
  );

  const handleUpdateSubVariableCondition = useCallback<HandleUpdateSubVariableCondition>(
    (caseId, conditionId, subConditionId, newSubCondition) => {
      const newInputs = produce(inputs, (draft) => {
        const targetCase = draft.cases?.find((item) => item.case_id === caseId);
        if (targetCase) {
          const targetCondition = targetCase.conditions.find((item) => item.id === conditionId);
          if (targetCondition && targetCondition.sub_variable_condition) {
            const targetSubCondition = targetCondition.sub_variable_condition.conditions.find(
              (item) => item.id === subConditionId
            );
            if (targetSubCondition) Object.assign(targetSubCondition, newSubCondition);
          }
        }
      });
      setInputs(newInputs);
    },
    [inputs, setInputs]
  );

  const handleToggleSubVariableConditionLogicalOperator = useCallback<HandleToggleSubVariableConditionLogicalOperator>(
    (caseId, conditionId) => {
      const newInputs = produce(inputs, (draft) => {
        const targetCase = draft.cases?.find((item) => item.case_id === caseId);
        if (targetCase) {
          const targetCondition = targetCase.conditions.find((item) => item.id === conditionId);
          if (targetCondition && targetCondition.sub_variable_condition)
            targetCondition.sub_variable_condition.logical_operator =
              targetCondition.sub_variable_condition.logical_operator === LogicalOperator.and
                ? LogicalOperator.or
                : LogicalOperator.and;
        }
      });
      setInputs(newInputs);
    },
    [inputs, setInputs]
  );

  return {
    readOnly,
    inputs,
    filterVar,

    handleToggleConditionLogicalOperator,
    handleAddSubVariableCondition,
    handleUpdateSubVariableCondition,
    handleRemoveSubVariableCondition,
    handleToggleSubVariableConditionLogicalOperator,
    nodesOutputVars: availableVars,
    availableNodes: availableNodesWithParent,
  };
};

export default useConfig;

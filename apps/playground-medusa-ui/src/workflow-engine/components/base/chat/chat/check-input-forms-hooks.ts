import { useCallback } from 'react';

import type { InputForm } from './type';
import { useToastContext } from '@base/toast';
import { InputVarType } from '@workflow/types';
import { TransferMethod } from '@workflow-app/types/app';

export const useCheckInputsForms = () => {
  const { notify } = useToastContext();

  const checkInputsForm = useCallback(
    (inputs: Record<string, any>, inputsForm: InputForm[]) => {
      let hasEmptyInput = '';
      let fileIsUploading = false;
      const requiredVars = inputsForm.filter(({ required }) => required);

      if (requiredVars?.length) {
        requiredVars.forEach(({ variable, label, type }) => {
          if (hasEmptyInput) return;

          if (fileIsUploading) return;

          if (!inputs[variable]) hasEmptyInput = label as string;

          if ((type === InputVarType.singleFile || type === InputVarType.multiFiles) && inputs[variable]) {
            const files = inputs[variable];
            if (Array.isArray(files))
              fileIsUploading = files.find(
                (item) => item.transferMethod === TransferMethod.local_file && !item.uploadedId,
              );
            else fileIsUploading = files.transferMethod === TransferMethod.local_file && !files.uploadedId;
          }
        });
      }

      if (hasEmptyInput) {
        notify({ type: 'error', message: `${hasEmptyInput} value can not be empty` }); //t('appDebug.errorMessage.valueOfVarRequired', { key: hasEmptyInput }) });
        return false;
      }

      if (fileIsUploading) {
        notify({ type: 'info', message: 'Please wait for the file/files to upload' });
        return;
      }

      return true;
    },
    [notify],
  );

  return {
    checkInputsForm,
  };
};

import { GlobalStateContext } from '../../context/GlobalStateContext';
import { useContext } from 'react';
import { TextArea } from '../flow/nodes/fields';
import { useState, Fragment } from 'react';
import { Dialog, Transition, DialogBackdrop } from '@headlessui/react';
import { useSelector } from '@xstate/react';

const openModalsSelector = (state: any) => state.context.openModals;

export const ImportModal = () => {
  const globalServices = useContext(GlobalStateContext);

  const openModals = useSelector(globalServices.workspaceService, openModalsSelector);

  const handleClose = () => {
    globalServices.workspaceService.send({ type: 'CLOSE_MODAL', data: { name: 'import' } });
  };

  const handleImport = () => {
    globalServices.workspaceService.send('IMPORT_SPEC', { content: importedSpec });
  };

  const [importedSpec, setImportedSpec] = useState<string>();

  const isButtonDisabled = !importedSpec || importedSpec?.length === 0;

  //
  return (
    <Transition appear show={openModals.includes('import')} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={handleClose}>
        <div className="flex min-h-screen items-center justify-center px-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop className="fixed inset-0 backdrop-blur" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-background relative flex max-w-md transform flex-col gap-4 rounded-lg border border-gray-700 p-4 shadow-lg transition-all">
              <div className="bg-noise pointer-events-none absolute inset-0 rounded-lg opacity-20 invert dark:invert-0" />
              <Dialog.Title as="h3" className="text-muted-foreground text-sm font-bold uppercase tracking-wider">
                Import Job Spec
              </Dialog.Title>
              <div className="bg-background flex flex-col">
                <TextArea
                  textAreaClassName="h-96 w-full"
                  placeholder="Paste your job spec here"
                  value={importedSpec}
                  onChange={(newValue) => setImportedSpec(newValue)}
                />
              </div>

              <p className="text-warning text-sm">
                Warning: Importing will overwrite any unsaved changes you may have.
              </p>

              <div className="align-items flex w-full justify-center">
                <button
                  className={`font-lg text-muted-foreground rounded-lg border border-gray-700 px-6 py-2 font-bold uppercase ${isButtonDisabled ? '' : 'hover:border-white hover:text-white'}`}
                  onClick={handleImport}
                  disabled={isButtonDisabled}
                >
                  Import
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

import type { StateCreator } from "zustand";
import type { RunFile } from "@/app/components/workflow/types";

export type FormSliceShape = {
  inputs: Record<string, string>;
  setInputs: (inputs: Record<string, string>) => void;
  files: RunFile[];
  setFiles: (files: RunFile[]) => void;
};

export const createFormSlice: any = (set: any) => ({
  inputs: {},
  setInputs: (inputs: any) => set(() => ({ inputs })),
  files: [],
  setFiles: (files: any) => set(() => ({ files })),
});

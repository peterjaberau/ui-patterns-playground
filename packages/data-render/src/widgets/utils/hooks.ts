import { useReducer, useRef, useEffect } from 'react';

export function usePrevious(value: any) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// Similar to setState of class component
export const useSet = (initState: any) => {
  return useReducer((state: any, newState: any) => {
    return { ...state, ...newState };
  }, initState);
};

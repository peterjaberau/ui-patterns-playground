// import { useSearchParams } from "react-router-dom"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export const useSelectedParams = ({
  param,
  prefix,
  multiple = false,
}: {
  param: string;
  prefix?: string;
  multiple?: boolean;
}) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  const searchParams: any = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const identifier = prefix ? `${prefix}_${param}` : param;
  const offsetKey = prefix ? `${prefix}_offset` : 'offset';

  const updateSearchParams = (newParams: URLSearchParams) => {
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  // const add = (value: string) => {
  //   setSearchParams((prev) => {
  //     const newValue = new URLSearchParams(prev);
  //
  //     const updateMultipleValues = () => {
  //       const existingValues = newValue.get(identifier)?.split(',') || [];
  //
  //       if (!existingValues.includes(value)) {
  //         existingValues.push(value);
  //         newValue.set(identifier, existingValues.join(','));
  //       }
  //     };
  //
  //     const updateSingleValue = () => {
  //       newValue.set(identifier, value);
  //     };
  //
  //     multiple ? updateMultipleValues() : updateSingleValue();
  //     newValue.delete(offsetKey);
  //
  //     return newValue;
  //   });
  // };

  const add = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (multiple) {
      const existingValues = newParams.get(identifier)?.split(',') || [];
      if (!existingValues.includes(value)) {
        existingValues.push(value);
        newParams.set(identifier, existingValues.join(','));
      }
    } else {
      newParams.set(identifier, value);
    }

    newParams.delete(offsetKey);
    updateSearchParams(newParams);
  };

  // const deleteParam = (value?: string) => {
  //   const deleteMultipleValues = (prev: URLSearchParams) => {
  //     const existingValues = prev.get(identifier)?.split(',') || [];
  //     const index = existingValues.indexOf(value || '');
  //     if (index > -1) {
  //       existingValues.splice(index, 1);
  //       prev.set(identifier, existingValues.join(','));
  //     }
  //   };
  //
  //   const deleteSingleValue = (prev: URLSearchParams) => {
  //     prev.delete(identifier);
  //   };
  //
  //   setSearchParams((prev) => {
  //     if (value) {
  //       multiple ? deleteMultipleValues(prev) : deleteSingleValue(prev);
  //       if (!prev.get(identifier)) {
  //         prev.delete(identifier);
  //       }
  //     } else {
  //       prev.delete(identifier);
  //     }
  //     prev.delete(offsetKey);
  //     return prev;
  //   });
  // };

  const deleteParam = (value?: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (value) {
      if (multiple) {
        const existingValues = newParams.get(identifier)?.split(',') || [];
        const updatedValues = existingValues.filter((v) => v !== value);
        updatedValues.length ? newParams.set(identifier, updatedValues.join(',')) : newParams.delete(identifier);
      } else {
        newParams.delete(identifier);
      }
    } else {
      newParams.delete(identifier);
    }

    newParams.delete(offsetKey);
    updateSearchParams(newParams);
  };

  const get = () => {
    return searchParams.get(identifier)?.split(',').filter(Boolean) || [];
  };

  return { add, delete: deleteParam, get };
};

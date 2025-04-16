import { OptionList } from '@shopify/polaris';
import { useMemo, useState } from 'react';

export const NodeViewerCatalog = ({ data }: any) => {
  const [selected, setSelected] = useState([0]) as any;

  const dataOptions = useMemo(() => {
    return data.data.list.map((item: any) => ({
      value: item,
      label: item,
    }));
  }, [data.data.list]);

  console.log('NodeViewerCatalog', dataOptions);

  return (
    <>
      <OptionList title="Catalog" onChange={setSelected} options={dataOptions} selected={selected} />
    </>
  );
};

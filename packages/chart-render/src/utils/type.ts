export type ArrayFilters = Array<
  | {
  key: string;
  operator: '=' | '!=' | (string & {});
  value: string | number;
  extra: any;
}
  | {
  key: string;
  operator: 'in' | 'not in' | (string & {});
  value: (string | number)[];
  extra: any;
}
  | {
  key: string;
  operator: 'between' | 'not between' | (string & {});
  value: [string | number, string | number];
  extra: any;
}
>;
export type ObjectFilters = Record<string, ArrayFilters[0]['value']>;

/**

 export type ArrayOrders = Array<{
 field: string;
 order: 'asc' | 'desc' | (string & {});
 }>;
 export type ObjectOrders = Record<string, ArrayOrders[0]['order']>;

 **/

export type MetaItem = {
  /** The key name corresponding to a single data item*/
  id: string;

  /** Description of the key corresponding to a single data item*/
  name?: string;

  /** Is it a dimension field? `true` - dimension, `false` - indicator. By default, it is processed as an indicator*/
  isDim?: boolean;

  /** Is it a percentage? This is only used for indicators. When enabled, a value of `0.5` will be rendered as `50%`*/
  isRate?: boolean;
};

export type DataItem = Record<string, any>;

export type DataSource = { meta: MetaItem[]; data: DataItem[] };

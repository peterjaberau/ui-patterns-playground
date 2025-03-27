import { TaxExclusive, TaxInclusive } from '@medusajs/icons';
import { Tooltip } from '@medusajs/ui';

type IncludesTaxTooltipProps = {
  includesTax?: boolean;
};

export const IncludesTaxTooltip = ({ includesTax }: IncludesTaxTooltipProps) => {
  return (
    <Tooltip
      maxWidth={999}
      content={includesTax ? 'Prices in this column are tax inclusive.' : 'Prices in this column are tax exclusive.'}
    >
      {includesTax ? (
        <TaxInclusive className="text-ui-fg-muted shrink-0" />
      ) : (
        <TaxExclusive className="text-ui-fg-muted shrink-0" />
      )}
    </Tooltip>
  );
};

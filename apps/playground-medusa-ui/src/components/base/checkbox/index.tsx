import { RiCheckLine } from '@remixicon/react';
import s from './index.module.css';
import cn from '@utils/classnames';

type CheckboxProps = {
  checked?: boolean;
  onCheck?: () => void;
  className?: string;
  disabled?: boolean;
  mixed?: boolean;
};

const Checkbox = ({ checked, onCheck, className, disabled, mixed }: CheckboxProps) => {
  if (!checked) {
    return (
      <div
        className={cn(
          'border-components-checkbox-border bg-components-checkbox-bg-unchecked shadow-xs hover:border-components-checkbox-border-hover h-4 w-4 cursor-pointer rounded-[4px] border',
          mixed ? s.mixed : 'hover:bg-components-checkbox-bg-unchecked-hover',
          disabled &&
            'border-components-checkbox-border-disabled bg-components-checkbox-bg-disabled hover:border-components-checkbox-border-disabled hover:bg-components-checkbox-bg-disabled cursor-not-allowed',
          className,
        )}
        onClick={() => {
          if (disabled) return;
          onCheck?.();
        }}
      ></div>
    );
  }
  return (
    <div
      className={cn(
        'bg-components-checkbox-bg text-components-checkbox-icon shadow-xs hover:bg-components-checkbox-bg-hover flex h-4 w-4 cursor-pointer items-center justify-center rounded-[4px]',
        disabled &&
          'bg-components-checkbox-bg-disabled-checked text-components-checkbox-icon-disabled hover:bg-components-checkbox-bg-disabled-checked cursor-not-allowed',
        className,
      )}
      onClick={() => {
        if (disabled) return;

        onCheck?.();
      }}
    >
      <RiCheckLine className={cn('h-3 w-3')} />
    </div>
  );
};

export default Checkbox;

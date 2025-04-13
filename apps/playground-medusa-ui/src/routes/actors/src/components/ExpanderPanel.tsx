import { CodeBracketIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { SVGProps, useState } from 'react';

export interface ExpanderPanelProps {
  className?: string;
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  children?: React.ReactNode;
  title?: string;
}

export const ExpanderPanel = ({
  className = '',
  children,
  icon: Icon = CodeBracketIcon,
  title = '',
}: ExpanderPanelProps | any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`${className} relative transition-all ${isOpen ? '' : ''}`}>
      <label
        title={title}
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        className={`btn hover:border-secondary btn-circle swap swap-rotate pointer-events-auto absolute right-2 top-2 z-10 border-0 hover:border-2 ${
          isOpen ? 'swap-active' : ''
        }`}
      >
        <Icon className="swap-off h-5 w-5 fill-current text-white" />
        <XMarkIcon className="swap-on h-5 w-5 fill-current text-white" />
      </label>

      <motion.div
        className={`${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        } bg-base-100 relative z-0 overflow-hidden rounded-lg rounded-tr-[32px] border-2 border-gray-500 pr-2`}
        layout="size"
        animate={{
          height: isOpen ? 'auto' : '48px',
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2, type: 'tween' }}
        initial={false}
      >
        {children}
      </motion.div>
    </div>
  );
};

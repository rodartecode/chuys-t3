
import clsx from 'clsx'
import type { FunctionComponent } from 'react';

const formClasses =
  'block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm'


interface fieldProps {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}

const Label: FunctionComponent<fieldProps> = ({ id, children }) => {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  )
}


export const TextField: FunctionComponent<fieldProps> = ({ id, label, type = 'text', className, ...props }) => {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

const SelectField: FunctionComponent<fieldProps> = ({ id, label, className, ...props }) => {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}

export default SelectField;
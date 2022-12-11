import clsx from "clsx";
import type { FunctionComponent } from "react";

interface classNames {
    className?: string;
    children?: React.ReactNode;
}

const Container: FunctionComponent<classNames> = ({className, ...props}) => {
  return (
    <div className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...props} />
  )
}

export default Container;
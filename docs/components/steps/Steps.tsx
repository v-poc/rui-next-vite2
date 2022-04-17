import React, { ReactNode } from "react";
import classnames from "classnames";
import type { StepProps } from "./Step";

// StepsProps type
export type StepsProps = {
  prefixCls?: string;
  className?: string;
  children?: ReactNode;
  currentIndex?: number;
  direction?: "horizontal" | "vertical";
};

// Steps FC
export const Steps: React.FC<StepsProps> = (props) => {
  const {
    prefixCls,
    className,
    currentIndex,
    direction,
    children,
  } = props;

  const wrapCls = classnames(
    prefixCls,
    className,
    `${prefixCls}-${direction}`,
  );

  return (
    <div
      className={wrapCls}
    >
      {React.Children.map(children, (child: ReactNode, index: number) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        const childProps = child.props as StepProps;
        let status = childProps.status || "wait";

        if (index < currentIndex) {
          status = childProps.status || "finish";
        } else if (index === currentIndex) {
          status = childProps.status || "process";
        }

        const icon = childProps.icon || <span className="r-step-icon-dot"></span>;

        return React.cloneElement(child, {
          status,
          icon,
        });
      })}
    </div>
  );
};

Steps.defaultProps = {
  prefixCls: 'r-steps',
  currentIndex: 0,
  direction: "horizontal",
};

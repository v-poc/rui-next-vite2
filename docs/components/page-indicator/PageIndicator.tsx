import React, { ReactElement } from "react";
import classnames from "classnames";

// PageIndicatorProps interface
export interface PageIndicatorProps {
  prefixCls?: string;
  className?: string;
  total: number;
  current: number;
  color?: "primary" | "white";
};

// PageIndicator FC
const PageIndicator = (props: PageIndicatorProps) => {
  const {
    prefixCls,
    className,
    total,
    current,
    color,
  } = props;

  const wrapCls = classnames(
    prefixCls,
    className,
    `${prefixCls}-color-${color}`,
  );

  const itemCls = (index: number) => {
    return classnames(
      `${prefixCls}-item`,
      {
        [`${prefixCls}-item-active`]: current === index,
      }
    );
  };

  const items: ReactElement[] = new Array(total).fill("").map((n, idx) => (
    <div
      key={`indicator${idx}`}
      className={itemCls(idx)}
    ></div>
  ));

  return (
    <div
      className={wrapCls}
    >
      {items}
    </div>
  );
};

PageIndicator.defaultProps = {
  prefixCls: "r-page-indicator",
  color: "primary",
};

export default PageIndicator;

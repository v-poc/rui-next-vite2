import React, { CSSProperties } from "react";
import classnames from "classnames";

// BadgeProps interface
export interface BadgeProps {
  prefixCls?: string;
  className?: string;
  style?: CSSProperties;
  hot?: boolean;
  size?: "large" | "small";
  overflowCount?: number;
  corner?: boolean;
  dot?: boolean;
  text?: any;
};

// Badge FC
const Badge = (props: BadgeProps) => {
  let {
    className,
    prefixCls,
    children,
    text,
    size,
    overflowCount,
    dot,
    corner,
    hot,
    ...restProps
  } = props;

  overflowCount = overflowCount as number;

  if (dot) {
    text = ""; // dot mode don't need text
  }

  if (typeof text === 'number' && text > overflowCount) {
    text = `${overflowCount}+`; // overflow count
  }

  const scrollNumberCls = classnames({
    [`${prefixCls}-dot`]: dot,
    [`${prefixCls}-dot-large`]: dot && size === "large",
    [`${prefixCls}-text`]: !dot && !corner,
    [`${prefixCls}-corner`]: corner,
    [`${prefixCls}-corner-large`]: corner && size === "large",
  });

  const wrapCls = classnames(
    prefixCls,
    className,
    {
      [`${prefixCls}-not-a-wrapper`]: !children,
      [`${prefixCls}-corner-wrapper`]: corner,
      [`${prefixCls}-hot`]: !!hot,
      [`${prefixCls}-corner-wrapper-large`]: corner && size === "large",
    }
  );

  return (
    <span className={wrapCls}>
      {children}
      {(text || dot) && (
        <sup
          className={scrollNumberCls}
          {...restProps}
        >
          {text}
        </sup>
      )}
    </span>
  );
};

Badge.defaultProps = {
  prefixCls: "r-badge",
  size: "small",
  overflowCount: 99,
  dot: false,
  corner: false,
};

export default Badge;

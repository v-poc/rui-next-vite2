import React, { CSSProperties } from "react";
import classnames from "classnames";

// DividerPropsType interface
export interface DividerPropsType {
  contentAlign?: "center" | "left" | "right";
}

// DividerProps interface
export interface DividerProps extends DividerPropsType {
  style?: CSSProperties;
  prefixCls?: string;
  className?: string;
}

// Divider FC
const Divider = (props: DividerProps) => {
  const {
    contentAlign,
    style,
    prefixCls,
    className,
    children,
  } = props;

  const wrapCls = classnames(
    prefixCls,
    className,
    `${prefixCls}-${contentAlign}`,
  );

  return (
    <div
      className={wrapCls}
      style={style}
    >
      {children && (
        <div className={`${prefixCls}-content`}>
          {children}
        </div>
      )}
    </div>
  );
};

Divider.defaultProps = {
  prefixCls: "r-divider",
  contentAlign: "center",
};

export default Divider;

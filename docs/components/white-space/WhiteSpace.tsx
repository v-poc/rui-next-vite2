import React from "react";
import classnames from "classnames";

// WhiteSpacePropsType interface
export interface WhiteSpacePropsType {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

// WhiteSpaceProps interface
export interface WhiteSpaceProps extends WhiteSpacePropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

// WhiteSpace FC
const WhiteSpace = (props: WhiteSpaceProps) => {
  const {
    prefixCls,
    size,
    className,
    style,
    onClick
  } = props;

  const wrapCls = classnames(
    prefixCls,
    `${prefixCls}-${size}`, className
  );

  return (
    <div
      className={wrapCls}
      style={style}
      onClick={onClick}
    />
  );
};

WhiteSpace.defaultProps = {
  prefixCls: 'r-whitespace',
  size: 'md',
};

export default WhiteSpace;

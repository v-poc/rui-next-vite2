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
  children?: any;
  vertical?: boolean; // vertical or horizontal
}

// WhiteSpace FC
const WhiteSpace = (props: WhiteSpaceProps) => {
  const {
    prefixCls,
    size,
    className,
    style,
    onClick,
    children,
    vertical = true,
  } = props;

  const _cls = prefixCls || (vertical ? "r-whitespace" : "r-wingblank");
  const _size = size || (vertical ? "md" : "lg");

  const wrapCls = classnames(
    _cls,
    `${_cls}-${_size}`,
    className
  );

  return (
    <div
      className={wrapCls}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default WhiteSpace;

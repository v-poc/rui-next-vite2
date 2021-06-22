import React, { useEffect, HTMLProps, MouseEventHandler } from "react";
import classnames from "classnames";
import loadSprite from "../_utils/loadSprite";

// IconPropsType interface
export interface IconPropsType {
  type: string;
  color?: string;
}

// SvgProps
export type SvgProps = Omit<
  HTMLProps<SVGSVGElement>,
  "size" | "type"
>;

// IconProps interface
export interface IconProps extends IconPropsType, SvgProps {
  size?: "xxs" | "xs" | "sm" | "md" | "lg";
  onClick?: MouseEventHandler<SVGSVGElement>;
  prefixCls?: string;
  className?: string;
}

// Icon FC
const Icon = (props: IconProps) => {
  // useEffect hook
  useEffect(() => loadSprite(), []);

  const {
    type,
    prefixCls,
    className,
    size,
    ...restProps
  } = props;

  const wrapCls = classnames(
    prefixCls,
    className,
    `${prefixCls}-${type}`,
    `${prefixCls}-${size}`,
  );

  return (
    <svg
      className={wrapCls}
      {...restProps}
    >
      <use xlinkHref={`#${type}`} />
    </svg>
  );
};

Icon.defaultProps = {
  prefixCls: "r-icon",
  size: "md",
};

export default Icon;
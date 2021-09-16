import React, { useEffect, HTMLProps, MouseEventHandler } from "react";
import classnames from "classnames";
import loadSprite from "../_utils/loadSprite";

// SvgProps
export type SvgProps = Omit<
  HTMLProps<SVGSVGElement>,
  "size" | "type"
>;

// IconProps interface
export interface IconProps extends SvgProps {
  prefixCls?: string;
  className?: string;
  size?: "xxs" | "xs" | "sm" | "md" | "lg";
  type: string;
  color?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

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

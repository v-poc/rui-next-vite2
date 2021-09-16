import React, { ReactNode } from "react";
import classnames from "classnames";

// NavBarProps interface
export interface NavBarProps {
  prefixCls?: string;
  className?: string;
  mode?: "dark" | "light";
  icon?: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  onLeftClick?: () => void;
};

// NavBar FC
const NavBar = (props: NavBarProps) => {
  const {
    mode,
    icon,
    leftContent,
    rightContent,
    onLeftClick,
    prefixCls,
    className,
    children,
    ...restProps
  } = props;

  const wrapCls = classnames(
    prefixCls,
    className,
    `${prefixCls}-${mode}`
  );

  return (
    <div
      className={wrapCls}
      {...restProps}
    >
      <div
        className={`${prefixCls}-left`}
        role="button"
        onClick={onLeftClick}
      >
        {icon && (
          <span
            className={`${prefixCls}-left-icon`}
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        {leftContent}
      </div>
      <div className={`${prefixCls}-title`}>
        {children}
      </div>
      <div className={`${prefixCls}-right`}>
        {rightContent}
      </div>
    </div>
  );
};

NavBar.defaultProps = {
  prefixCls: "r-navbar",
  mode: "dark",
  onLeftClick: () => {},
};

export default NavBar;

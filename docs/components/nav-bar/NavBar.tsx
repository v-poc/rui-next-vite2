import React, { ReactNode } from "react";
import classnames from "classnames";

// NavBarPropsType interface
export interface NavBarPropsType {
  mode?: "dark" | "light";
  icon?: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  onLeftClick?: () => void;
}

// NavBarProps interface
export interface NavBarProps extends NavBarPropsType {
  prefixCls?: string;
  className?: string;
}

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

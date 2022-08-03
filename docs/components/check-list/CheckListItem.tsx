import React, { ReactNode, useContext } from "react";
import classnames from "classnames";
import List from "../list/index";
import { CheckListContext } from "./CheckListContext";
import { logInfo } from "../_utils/index";

// CheckListItemProps Type
export type CheckListItemProps = {
  prefixCls?: string;
  children?: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
  prefix?: ReactNode;
  readOnly?: boolean;
  title?: ReactNode;
  value: string;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
};

// @ts-ignore CheckListItem FC
const CheckListItem: React.FC<CheckListItemProps> = (props) => {
  const {
    prefixCls,
    children,
    description,
    disabled,
    prefix,
    readOnly,
    title,
    value,
    onClick,
  } = props;

  const ctx = useContext(CheckListContext);
  if (!ctx) {
    logInfo("CheckList.Item can ONLY be used inside CheckList.", "warn");
    return;
  }

  const isActive = ctx.value.includes(value);
  const isReadOnly = readOnly || ctx.readOnly;
  const isDisabled = disabled || ctx.disabled;

  const wrapCls = classnames({
    [`${prefixCls}-item-readonly`]: readOnly,
  });

  const renderExtra = (
    <div
      className={`${prefixCls}-item-extra`}
    >
      {isActive && ctx.activeIcon}
    </div>
  );

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (isReadOnly) {
      return;
    }

    if (isActive) {
      ctx.uncheck(value);
    } else {
      ctx.check(value);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <List.Item
      className={wrapCls}
      title={title}
      description={description}
      prefix={prefix}
      arrow={false}
      clickable={!isReadOnly}
      extra={renderExtra}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {children}
    </List.Item>
  );
};

CheckListItem.defaultProps = {
  prefixCls: "r-check-list",
};

export default CheckListItem;

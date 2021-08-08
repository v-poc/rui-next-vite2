import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import Icon from "../icon/index";
import TouchFeedback from "../_utils/TouchFeedback";
import { getDataAttr } from "../_utils/index";

// TagPropsType interface
export interface TagPropsType {
  disabled?: boolean;
  selected?: boolean;
  closable?: boolean;
  small?: boolean;
  onChange?: (selected: boolean) => void;
  onClose?: () => void;
  afterClose?: () => void;
}

// TagProps interface
export interface TagProps extends TagPropsType {
  prefixCls?: string;
  className?: string;
  style?: CSSProperties;
}

// Tag FC
const Tag = (props: TagProps) => {
  const {
    children,
    className,
    prefixCls,
    disabled,
    selected,
    closable,
    small,
    style,
    onChange,
    onClose,
    afterClose,
  } = props;

  const dataAttributes = getDataAttr(props) || {};
  const [isSelected, setIsSelected] = useState(selected);
  const [closed, setClosed] = useState(false);

  // useEffect hook
  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const onClick = useCallback(() => {
    if (disabled) {
      return;
    }

    setIsSelected(!isSelected);

    if (onChange) {
      onChange(!isSelected);
    }
  }, [disabled, isSelected, onChange]);

  const onTagClose = useCallback(() => {
    if (onClose) {
      onClose();
    }

    setClosed(true);

    if (afterClose) {
      afterClose();
    }
  }, [onClose, afterClose]);

  const wrapCls = classnames(
    className,
    prefixCls,
    {
      [`${prefixCls}-normal`]: !disabled && (!isSelected || small || closable),
      [`${prefixCls}-small`]: small,
      [`${prefixCls}-active`]: !disabled && isSelected && !small && !closable,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-closable`]: closable,
    }
  );

  return !closed && (
    <div
      {...dataAttributes}
      className={wrapCls}
      onClick={onClick}
      style={style}
    >
      <div className={`${prefixCls}-text`}>
        {children}
      </div>
      {!disabled && closable && !small && (
        <TouchFeedback activeClassName={`${prefixCls}-close-active`}>
          <div
            className={`${prefixCls}-close`}
            role="button"
            onClick={onTagClose}
            aria-label="remove tag"
          >
            <Icon
              type="cross-circle"
              size="xs"
              aria-hidden="true"
            />
          </div>
        </TouchFeedback>
      )}
    </div>
  );
};

Tag.defaultProps = {
  prefixCls: "r-tag",
  disabled: false,
  selected: false,
  closable: false,
  small: false,
  onChange: () => {},
  onClose: () => {},
  afterClose: () => {},
};

export default Tag;
import React from 'react';
import classnames from 'classnames';

// FlexItemPropsType interface
export interface FlexItemPropsType {
  disabled?: boolean;
}

// FlexItemProps interface
export interface FlexItemProps extends FlexItemPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

// FlexItem FC
const FlexItem = (props: FlexItemProps) => {
  const {
    children,
    className,
    prefixCls = 'r-flexbox',
    style,
    ...restProps
  } = props;

  const wrapCls = classnames(`${prefixCls}-item`, className);

  return (
    <div className={wrapCls} style={style} {...restProps}>
      {children}
    </div>
  );
};

export default FlexItem;

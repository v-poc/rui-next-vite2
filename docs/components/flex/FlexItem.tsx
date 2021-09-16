import React from 'react';
import classnames from 'classnames';

// FlexItemProps interface
export interface FlexItemProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
};

// FlexItem FC
const FlexItem = (props: FlexItemProps) => {
  const {
    prefixCls = 'r-flexbox',
    className,
    style,
    children,
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

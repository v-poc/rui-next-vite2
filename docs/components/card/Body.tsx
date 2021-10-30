import React from "react";
import classnames from "classnames";

// CardBodyProps Type
export type CardBodyProps = {
  prefixCls?: string;
  className?: string;
};

// CardBody FC
const CardBody = <CardBodyProps extends React.HTMLProps<HTMLDivElement>>(props) => {
  const {
    prefixCls,
    className,
    ...restProps
  } = props;
  
  const wrapCls = classnames(
    `${prefixCls}-body`,
    className
  );

  return (
    <div
      className={wrapCls}
      {...restProps}
    />
  );
};

CardBody.defaultProps = {
  prefixCls: 'r-card',
};

export default CardBody;

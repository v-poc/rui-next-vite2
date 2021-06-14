import React from "react";
import classnames from "classnames";

// CardBodyProps interface
export interface CardBodyProps extends React.HTMLProps<HTMLDivElement> {
  prefixCls?: string;
}

// CardBody FC
const CardBody = (props: CardBodyProps) => {
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

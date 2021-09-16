import React from "react";
import classnames from "classnames";
import CardHeader from "./Header";
import CardBody from "./Body";
import CardFooter from "./Footer";

// CardProps interface
export interface CardProps extends React.HTMLProps<HTMLDivElement> {
  prefixCls?: string;
  full?: boolean;
};

// Card FC
const Card = (props: CardProps) => {
  const {
    prefixCls,
    full,
    className,
    ...resetProps
  } = props;

  const wrapCls = classnames(
    prefixCls,
    className,
    {
      [`${prefixCls}-full`]: full,
    }
  );

  return (
    <div
      className={wrapCls}
      {...resetProps}
    />
  );
};

Card.defaultProps = {
  prefixCls: 'r-card',
  full: false,
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;

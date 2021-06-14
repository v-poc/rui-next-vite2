import React from "react";
import classnames from "classnames";
import CardHeader from "./Header";
import CardBody from "./Body";
import CardFooter from "./Footer";

// CardPropsType interface
export interface CardPropsType {
  full?: boolean;
}

// CardProps interface
export interface CardProps extends CardPropsType, React.HTMLProps<HTMLDivElement> {
  prefixCls?: string;
}

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

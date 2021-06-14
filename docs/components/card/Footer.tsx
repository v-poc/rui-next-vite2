import React, { ReactNode } from "react";
import classnames from "classnames";

// CardFooterPropsType interface
export interface CardFooterPropsType {
  content?: ReactNode;
  extra?: ReactNode;
}

// CardFooterProps interface
export interface CardFooterProps extends CardFooterPropsType {
  prefixCls?: string;
  className?: string;
}

// CardFooter FC
const CardFooter = (props: CardFooterProps) => {
  const {
    prefixCls,
    content,
    className,
    extra,
    ...restProps
  } = props;

  const wrapCls = classnames(
    `${prefixCls}-footer`,
    className
  );

  return (
    <div
      className={wrapCls}
      {...restProps}
    >
      <div className={`${prefixCls}-footer-content`}>
        {content}
      </div>
      {extra && (
        <div className={`${prefixCls}-footer-extra`}>
          {extra}
        </div>
      )}
    </div>
  );

};

CardFooter.defaultProps = {
  prefixCls: 'r-card',
};

export default CardFooter;

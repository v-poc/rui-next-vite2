import React, { ReactNode, CSSProperties } from "react";
import classnames from "classnames";

// CardHeaderPropsType interface
export interface CardHeaderPropsType {
  title?: ReactNode;
  thumb?: ReactNode; // needs img url if thumb is string
  extra?: ReactNode;
}

// CardHeaderProps interface
export interface CardHeaderProps extends CardHeaderPropsType {
  prefixCls?: string;
  className?: string;
  style?: CSSProperties;
  thumbStyle?: CSSProperties;
}

// CardHeader FC
const CardHeader = (props: CardHeaderProps) => {
  const {
    prefixCls,
    className,
    title,
    thumb,
    thumbStyle,
    extra,
    ...restProps
  } = props;

  const wrapCls = classnames(
    `${prefixCls}-header`,
    className
  );

  return (
    <div
      className={wrapCls}
      {...restProps}
    >
      <div className={`${prefixCls}-header-content`}>
        {typeof thumb === 'string' ? (
          <img src={thumb} style={thumbStyle} />
        ) : thumb}
        {title}
      </div>
      {extra && (
        <div className={`${prefixCls}-header-extra`}>
          {extra}
        </div>
      )}
    </div>
  );
};

CardHeader.defaultProps = {
  prefixCls: "r-card",
  thumbStyle: {},
};

export default CardHeader;
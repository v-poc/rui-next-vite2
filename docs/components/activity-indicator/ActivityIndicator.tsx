import React from "react";
import classnames from "classnames";
import CarouselCircle from "./CarouselCircle";

// ActivityIndicatorPropTypes interface
export interface ActivityIndicatorPropTypes {
  animating?: boolean;
  carousel?: boolean;
  toast?: boolean;
  size?: "large" | "small";
  sizeNum?: number;
  text?: string;
  color?: string;
}

// ActivityIndicatorProps interface
export interface ActivityIndicatorProps extends ActivityIndicatorPropTypes {
  prefixCls?: string;
  className?: string;
}

// ActivityIndicator FC
const ActivityIndicator = (props: ActivityIndicatorProps) => {
  const {
    prefixCls,
    className,
    animating,
    carousel,
    toast,
    size,
    sizeNum,
    text,
    color,
  } = props;

  const wrapCls = classnames(
    prefixCls,
    className,
    {
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
      [`${prefixCls}-toast`]: !!toast,
    }
  );

  const spinnerCls = classnames(
    `${prefixCls}-spinner`,
    {
      [`${prefixCls}-spinner-lg`]: !!toast || size === 'large',
    }
  );

  if (carousel) {
    return (
      <CarouselCircle
        size={sizeNum}
        color={color}
      />
    );
  }

  if (!animating) {
    return null;
  }

  if (toast) {
    return (
      <div className={wrapCls}>
        {text ? (
          <div className={`${prefixCls}-content`}>
            <span className={spinnerCls} aria-hidden="true" />
            <span className={`${prefixCls}-toast`}>{text}</span>
          </div>
        ) : (
          <div className={`${prefixCls}-content`}>
            <span className={spinnerCls} aria-label="Loading" />
          </div>
        )}
      </div>
    );
  }
  
  return text ? (
    <div className={wrapCls}>
      <span className={spinnerCls} aria-hidden="true" />
      <span className={`${prefixCls}-tip`}>{text}</span>
    </div>
  ) : (
    <div className={wrapCls}>
      <span className={spinnerCls} aria-label="loading" />
    </div>
  );
};

ActivityIndicator.defaultProps = {
  prefixCls: "r-activity-indicator",
  animating: true,
  carousel: false,
  size: "small",
  sizeNum: 30,
  panelColor: "rgba(34, 34, 34, .6)",
  toast: false,
};

export default ActivityIndicator;

import React, { CSSProperties, ReactNode } from "react";
import classnames from "classnames";
import Button from "../button/index";

// ResultPropsType interface
export interface ResultPropsType {
  img?: ReactNode;
  imgUrl?: string;
  title?: ReactNode;
  message?: ReactNode;
  buttonText?: string;
  buttonType?: "primary" | "ghost";
  onButtonClick?: () => void;
}

// ResultProps interface
export interface ResultProps extends ResultPropsType {
  style?: CSSProperties;
  prefixCls?: string;
  className?: string;
}

// Result FC
const Result = (props: ResultProps) => {
  const {
    style,
    img,
    imgUrl,
    title,
    message,
    buttonText,
    onButtonClick,
    buttonType,
    prefixCls,
    className,
  } = props;

  let imgEl;
  if (img) {
    imgEl = (
      <div className={`${prefixCls}-pic`}>
        {img}
      </div>
    );
  } else if (imgUrl) {
    imgEl = (
      <div
        className={`${prefixCls}-pic`}
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
    );
  }

  const wrapCls = classnames(
    prefixCls,
    className
  );

  return (
    <div
      role="alert"
      className={wrapCls}
      style={style}
    >
      {imgEl}
      {title && (
        <div className={`${prefixCls}-title`}>
          {title}
        </div>
      )}
      {message && (
        <div className={`${prefixCls}-message`}>
          {message}
        </div>
      )}
      {buttonText && (
        <div className={`${prefixCls}-button`}>
          <Button
            type={buttonType}
            size="small"
            inline
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

Result.defaultProps = {
  prefixCls: "r-result",
  buttonType: "primary",
  onButtonClick: () => {},
};

export default Result;

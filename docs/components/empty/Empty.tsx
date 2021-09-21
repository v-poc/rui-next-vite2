import React, { CSSProperties, ReactNode } from "react";
import Result from "../result/index";
import Icon from "../icon/index";

// EmptyProps interface
export interface EmptyProps {
  prefixCls?: string;
  img?: ReactNode;
  imgStyle?: CSSProperties;
  message?: ReactNode;
};

// Empty FC
const Empty = (props: EmptyProps) => {
  const {
    prefixCls,
    img,
    imgStyle,
    message,
  } = props;

  let imgEl;
  if (typeof img === "string") {
    imgEl = (
      <img
        style={imgStyle}
        src={img}
        alt="empty"
      />
    );
  } else {
    imgEl = img;
  }

  return (
    <Result
      className={prefixCls}
      img={imgEl}
      message={message}
    />
  );
};

Empty.defaultProps = {
  prefixCls: "r-empty",
  img: <Icon type="empty" />,
};

export default Empty;

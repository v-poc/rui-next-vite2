import React, { useState } from "react";
import classnames from "classnames";

// XButtonProps type
export type XButtonProps = {
  prefixCls?: string;
  className?: string;
  delay?: number; // unit (ms)
  scale?: number;
  callback?: () => void;
};

// XButton FC
export const XButton: React.FC<XButtonProps> = (props) => {
  const {
    prefixCls,
    className,
    delay,
    scale = 1,
    callback,
  } = props;

  const [isAddCls, setIsAddCls] = useState(false);

  const btnStyle = {
    "--scale": scale,
  };

  if (scale !== 1) {
    btnStyle["transform"] = `scale(${scale})`;
  }

  const cls = classnames(
    prefixCls,
    className,
    {
      "pururun": isAddCls,
    },
  );

  const onClickButton = () => {
    setIsAddCls(true);
    setTimeout(() => {
      setIsAddCls(false);
      if (typeof callback === "function") {
        callback();
      }
    }, delay);
  };

  return (
    <div
      className={cls} // @ts-ignore
      style={btnStyle}
    >
      <div
        className={`${prefixCls}-chi`}
        onClick={onClickButton}
      >
        <div className={`${prefixCls}-star`}>★</div>
      </div>
    </div>  
  );
};

XButton.defaultProps = {
  prefixCls: "r-btn-op",
  delay: 2000,
};

import React, { useState } from "react";
import classnames from "classnames";

// XButtonProps type
export type XButtonProps = {
  prefixCls?: string;
  className?: string;
  scale?: number;
  callback?: () => void;
};

// XButton FC
export const XButton: React.FC<XButtonProps> = (props) => {
  const {
    prefixCls,
    className,
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
    }, 2000);
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
};

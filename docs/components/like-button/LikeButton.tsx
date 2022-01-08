import React, { useState } from "react";
import classnames from "classnames";

// LikeButtonProps type
export type LikeButtonProps = {
  prefixCls?: string;
  className?: string;
  scale?: number;
  callback?: () => void;
};

// LikeButton FC
export const LikeButton: React.FC<LikeButtonProps> = (props) => {
  const {
    prefixCls,
    className,
    scale = 1,
    callback,
  } = props;

  const [isAddCls, setIsAddCls] = useState(false);

  const btnStyle = {};
  if (scale !== 1) {
    btnStyle["transform"] = `scale(${scale})`;
  }

  const cls = classnames(
    `${prefixCls}-btn`,
    className,
    {
      "focus-btn": isAddCls,
    },
  );

  const onClickButton = () => {
    setIsAddCls(true);
    setTimeout(() => {
      setIsAddCls(false);
      if (typeof callback === "function") {
        callback();
      }
    }, 600);
  };

  return (
    <div className={`${prefixCls}-container`}>
      <div
        className={cls}
        style={btnStyle}
        onClick={onClickButton}
      >
        <div className={`${prefixCls}-wrapper`}>
          <div className={`${prefixCls}-ripple`}></div>
          <svg
            className={`${prefixCls}-heart`}
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
          </svg>
          <div
            className={`${prefixCls}-particle`} // @ts-ignore
            style={{"--line-count": 6}}
          >
            {new Array(6).fill("").map((item: any, index: number) => (
              <div
                key={`item${index}`}
                className={`${prefixCls}-particle-item`} // @ts-ignore
                style={{"--line-index": index}}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

LikeButton.defaultProps = {
  prefixCls: "r-btn-like",
};

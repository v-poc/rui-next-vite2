import React from "react";
import classnames from "classnames";

// ClampProps interface
export interface ClampProps {
  prefixCls?: string;
  className?: string;
  maxLines?: number;
};

// Clamp FC
const Clamp = (props: ClampProps) => {
  const {
    maxLines,
    children,
    prefixCls,
    className,
  } = props;

  const checkboxId = `exp${(Math.random() + "").replace(".", "")}`;

  const wrapCls = classnames(
    `${prefixCls}-wrapper`,
    className,
  );

  return (
    <div className={wrapCls}>
      <input
        type="checkbox"
        id={checkboxId}
        className="exp"
      />
      <div
        className="text"
        style={{ WebkitLineClamp: maxLines }}
      >
        <label
          htmlFor={checkboxId}
          className="btn"
        />
        {children}
      </div>
    </div>    
  );
};

Clamp.defaultProps = {
  maxLines: 3,
  prefixCls: "r-clamp",
};

export default Clamp;

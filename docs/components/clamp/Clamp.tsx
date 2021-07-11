import React from "react";

// ClampProps interface
export interface ClampProps {
  maxLines?: number;
  prefixCls?: string;
}

// Clamp FC
const Clamp = (props: ClampProps) => {
  const {
    maxLines,
    children,
    prefixCls,
  } = props;

  const checkboxId = `exp${(Math.random() + "").replace(".", "")}`;

  return (
    <div className={`${prefixCls}-wrapper`}>
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

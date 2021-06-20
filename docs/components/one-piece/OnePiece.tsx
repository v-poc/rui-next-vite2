import React from "react";

// OnePieceProps interface
export interface OnePieceProps {
  scale?: number;
  prefixCls?: string;
}

// OnePiece FC
const OnePiece = (props: OnePieceProps) => {
  const {
    scale = 1,
    prefixCls,
  } = props;

  return (
    <div className={`${prefixCls}-wrapper`}>
      <div className={prefixCls} style={{ transform: `scale(${scale})` }}>
        <div className="bone"></div>
        <div className="bone"></div>
        <div className="bone"></div>
        <div className="bone"></div>
        <div className="head">
          <div className="hat">
            <div className="line-lt"></div>
            <div className="line-rt"></div>
          </div>
          <div className="eye eye-lt"></div>
          <div className="eye eye-rt"></div>
        </div>
        <div className="mouth">
          <div className="teeth"></div>
        </div>
      </div>
    </div>    
  );
};

OnePiece.defaultProps = {
  prefixCls: "r-op",
};

export default OnePiece;
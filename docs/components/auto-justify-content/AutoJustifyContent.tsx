import React from "react";

// AutoJustifyContentProps type
export type AutoJustifyContentProps = {
  prefixCls?: string;
};

// AutoJustifyContent FC
export const AutoJustifyContent: React.FC<AutoJustifyContentProps> = (props) => {
  const {
    prefixCls,
    children,
  } = props;

  return (
    <div
      className={prefixCls}
    >
      <div
        className={`${prefixCls}-content`}
      >
        {children}
      </div>
    </div>    
  );
};

AutoJustifyContent.defaultProps = {
  prefixCls: "r-auto-justify-content",
};

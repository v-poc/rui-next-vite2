import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Icon from "../icon/index";

// RateProps interface
export interface RateProps {
  allowClear?: boolean;
  allowHalf?: boolean;
  character?: React.ReactNode;
  count?: number;
  defaultValue?: number;
  readonly?: boolean;
  value?: number;
  onChange?: (value: number) => void;
  activeColor?: string;
  size?: number;
  prefixCls?: string;
  className?: string;
}

// Rate FC
const Rate = (props: RateProps) => {
  const {
    prefixCls,
    className,
    count,
    allowHalf,
    character,
    readonly,
    allowClear,
    defaultValue,
    value,
    onChange,
    activeColor,
    size,
  } = props;

  const [val, setVal] = useState(() => {
    if ("value" in props) {
      return value;
    }

    if ("defaultValue" in props) {
      return defaultValue;
    }

    return 0;
  });

  useEffect(() => {
    if (onChange) {
      onChange(val);
    }
  }, [val]);

  const starList = Array(count).fill("");

  const handleClick = (v: number) => {
    if (readonly) {
      return;
    }

    if (allowClear && val === v) {
      setVal(0);
    } else {
      setVal(v);
    }
  };

  const renderStarItem = (
    v: number,
    isHalf: boolean
  ) => {
    const itemStyle = {
      fontSize: `${size}px`,
      lineHeight: `${size}px`,
    };

    if (v <= val) {
      itemStyle["color"] = activeColor;
    }

    const itemCls = classnames(
      `${prefixCls}-star`,
      {
        [`${prefixCls}-star-active`]: v <= val,
        [`${prefixCls}-star-half`]: isHalf,
        [`${prefixCls}-star-readonly`]: readonly,
      }
    );

    return (
      <div
        className={itemCls}
        style={itemStyle}
        onClick={() => handleClick(v)}
      >
        {character}
      </div>
    );
  };

  const wrapCls = classnames(
    prefixCls,
    className,
  );

  const boxCls = classnames(`${prefixCls}-box`);

  return (
    <div
      className={wrapCls}
    >
      {starList.map((_, i) => (
        <div
          key={`starItem${i}`}
          className={boxCls}
        >
          {allowHalf && renderStarItem(i + 0.5, true)}
          {renderStarItem(i + 1, false)}
        </div>
      ))}
    </div>
  );
};

Rate.defaultProps = {
  prefixCls: "r-rate",
  count: 5,
  allowHalf: false,
  character: <Icon type="star" />,
  defaultValue: 0,
  readonly: false,
  allowClear: true,
  activeColor: "#FFD21E",
  size: 24,
};

export default Rate;
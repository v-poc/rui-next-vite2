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
  style?: React.CSSProperties;
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
    style,
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

  const renderStar = (
    v: number,
    isHalf: boolean
  ) => {
    const itemCls = classnames(
      `${prefixCls}-star`,
      {
        [`${prefixCls}-star-active`]: val >= v,
        [`${prefixCls}-star-half`]: isHalf,
        [`${prefixCls}-star-readonly`]: readonly,
      }
    );

    return (
      <div
        className={itemCls}
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
      style={style}
    >
      {starList.map((_, i) => (
        <div
          key={`starItem${i}`}
          className={boxCls}
        >
          {allowHalf && renderStar(i + 0.5, true)}
          {renderStar(i + 1, false)}
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
};

export default Rate;

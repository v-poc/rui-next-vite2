import React, { ReactNode, useEffect, useState } from "react";
import Icon from "../icon/index";
import List from "../list/index";
import { CheckListContext } from "./CheckListContext";

// CheckListProps Type
export type CheckListProps = {
  // prefixCls?: string;
  children?: ReactNode;
  mode?: "default" | "card";
  activeIcon?: ReactNode;
  disabled?: boolean;
  defaultValue?: string[];
  multiple?: boolean;
  readOnly?: boolean;
  value?: string[];
  onChange?: (val: string[]) => void;
};

// CheckList FC
const CheckList: React.FC<CheckListProps> = (props) => {
  const {
    // prefixCls,
    children,
    mode,
    activeIcon,
    disabled,
    defaultValue,
    multiple,
    readOnly,
    value,
    onChange,
  } = props;

  const [val, setVal] = useState(() => {
    if ("value" in props) {
      return value;
    }

    if ("defaultValue" in props) {
      return defaultValue;
    }

    return [];
  });

  useEffect(() => {
    if (onChange) {
      onChange(val);
    }
  }, [val]);

  const check = (v: string) => {
    setVal(multiple ? [...value, v] : [v]);
  };

  const uncheck = (v: string) => {
    setVal(val.filter((item: string) => item !== v));
  };

  return (
    <CheckListContext.Provider
      value={{
        activeIcon,
        disabled,
        readOnly,
        value: val,
        check,
        uncheck,
      }}
    >
      <List
        mode={mode}
      >
        {children}
      </List>
    </CheckListContext.Provider>
  );
};

CheckList.defaultProps = {
  // prefixCls: "r-check-list",
  mode: "default",
  activeIcon: <Icon type="check" />,
  defaultValue: [],
  multiple: false,
};

export default CheckList;
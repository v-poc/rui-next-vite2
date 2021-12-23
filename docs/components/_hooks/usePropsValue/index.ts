import { useRef } from "react";
import usePersistFn from "../usePersistFn/index";
import useUpdate from "../useUpdate/index";

type PropsType<T> = {
  defaultValue?: T; // default value (optional)
  value?: T;       // value (optional)
  onChange?: (v: T) => void;
};

const usePropsValue = <T>(props: PropsType<T>) => {
  const {
    defaultValue,
    value,
    onChange,
  } = props;

  const valRef = useRef<T>(value !== undefined ? value : defaultValue);

  if (value !== undefined) {
    valRef.current = value;
  }

  const forceReRender = useUpdate();

  const setValue = usePersistFn((val: T) => {
    if (value === undefined) {
      valRef.current = val;
      forceReRender();
    }

    onChange?.(val);
  });

  return [valRef.current, setValue] as const;
};

export default usePropsValue;

import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  FocusEvent,
  KeyboardEvent,
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
  useLayoutEffect,
} from "react";
import Icon from "../icon/index";
import usePropsValue from "../_hooks/usePropsValue/index";

type NativeInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type PickNativeInputProps = Pick<
  NativeInputProps,
  | "autoCapitalize"
  | "autoComplete"
  | "autoCorrect"
  | "inputMode"
  | "max"
  | "min"
  | "maxLength"
  | "minLength"
  | "pattern"
  | "type"
  | "onBlur"
  | "onFocus"
  | "onKeyDown"
  | "onKeyUp"
>;

export type InputProps = PickNativeInputProps & {
  prefixCls?: string;
  clearable?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  enterKeyHint?: "done" | "enter" | "go" | "next" | "previous" | "search" | "send";
  id?: string;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
  onChange?: (v: string) => void;
  onClear?: () => void;
  onEnterKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  // onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export type InputRef = {
  blur: () => void;
  clear: () => void;
  focus: () => void;
};

// Input FC
const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    prefixCls,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    clearable,
    defaultValue,
    disabled,
    enterKeyHint,
    id,
    max,
    min,
    maxLength,
    minLength,
    pattern,
    placeholder,
    readOnly,
    type,
    value,
    // onChange,
    onClear,
    onEnterKeyPress,
    onBlur,
    onFocus,
    onKeyDown,
    onKeyUp,
  } = props;

  const [val, setVal] = usePropsValue(props);

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const nativeInputRef = useRef<HTMLInputElement>();

  // useImperativeHandle hook
  useImperativeHandle(ref, () => ({
    blur: () => nativeInputRef.current?.blur(),
    clear: () => setVal(""),
    focus: () => nativeInputRef.current?.focus(),
  }));

  // useLayoutEffect hook
  useLayoutEffect(() => {
    if (!enterKeyHint) {
      return;
    }

    nativeInputRef.current?.setAttribute("enterkeyhint", enterKeyHint);

    return () => {
      nativeInputRef.current?.removeAttribute("enterkeyhint");
    }
  }, [enterKeyHint]);

  // handle keydown event
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnterKeyPress && (e.code === "Enter" || e.keyCode === 13)) {
      onEnterKeyPress(e);
      return;
    }
    onKeyDown?.(e);
  };

  // handle blur event
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    onBlur?.(e);
  };

  // handle focus event
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
    onFocus?.(e);
  };

  return (
    <div
      className={`${prefixCls}-wrapper`}
    >
      <input
        ref={nativeInputRef}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        className={prefixCls}
        disabled={disabled}
        id={id}
        max={max}
        min={min}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        value={val}
        onChange={(e) => setVal(e.target?.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onKeyUp={onKeyUp}
      />
      {clearable && !!val && isFocus && (
        <div
          className={`${prefixCls}-clear`}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            setVal("");
            onClear?.();
          }}
        >
          <Icon type="cross-circle-o" size="xxs" />
        </div>
      )}
    </div>
  );
});

Input.defaultProps = {
  prefixCls: "r-input",
  defaultValue: "",
};

export default Input;

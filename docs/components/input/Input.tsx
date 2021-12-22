import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
} from "react";

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
};

export type InputRef = {
  blur: () => void;
  clear: () => void;
  focus: () => void;
};

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    defaultValue,
    value,
  } = props;

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const nativeInputRef = useRef<HTMLInputElement>();

  useImperativeHandle(ref, () => ({
    blur: () => {},
    clear: () => {},
    focus: () => {},
  }));
});

Input.defaultProps = {
  defaultValue: "",
};

export default Input;

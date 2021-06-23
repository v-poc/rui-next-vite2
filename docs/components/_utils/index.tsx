import React, { MutableRefObject } from "react";

// Check whether it is string
const isString = (str: any) => {
  return typeof str === "string";
};

// Check whether it contains double-byte characters (zh-CN)
const reDoubleByteChar = /^[\u4e00-\u9fa5]{2}$/;
const isDoubleByteChar = (str: any) => reDoubleByteChar.test(str);

// Insert one space between two `zh-CN` characters automatically
export const insertSpace = (child: any) => {
  if (isString(child.type) && isDoubleByteChar(child.props.children)) {
    return React.cloneElement(
      child,
      {},
      child.props.children.split('').join(' '),
    );
  }
  
  if (isString(child)) {
    if (isDoubleByteChar(child)) {
      child = child.split('').join(' ');
    }
    return (<span>{child}</span>);
  }
  
  return child;
}

type TargetElement = HTMLElement | Element | Document | Window;

// BasicTarget Type
export type BasicTarget<T = HTMLElement> =
  | (() => T | null)
  | T
  | null
  | MutableRefObject<T | null | undefined>;

// Get target element
export const getTargetElement = (
  target?: BasicTarget<TargetElement>,
  defaultElement?: TargetElement,
): TargetElement | null | undefined => {
  if (!target) {
    return defaultElement;
  }

  let targetElement: TargetElement | null | undefined;

  if (typeof target === "function") {
    targetElement = target();
  } else if ("current" in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
};

// Log info
export const logInfo = (content: any, type: string = 'info'): void => {
  console[type] &&
    console[type]('[RUI-log] %c%s', 'background: #69C;color: #FFF', content);
};

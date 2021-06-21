import React from "react";

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

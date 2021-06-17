import React from "react";
import classnames from "classnames";
import qrcode from "v-qr-code-next";

// QRCodeProps interface
export interface QRCodeProps {
  value: string;                 // the value of qr-code
  num?: number;                  // the type number
  level?: "L" | "M" | "Q" | "H"; // the error Correction Level
  mode?: "image" | "svg" | "table" | "dataurl";
  prefixCls?: string;
  className?: string;
}

// QRCode FC
const QRCode = (props: QRCodeProps) => {
  const {
    value,
    num = 8,
    level = "L",
    mode,
    prefixCls,
    className,
  } = props;

  const qr = qrcode(
    num,  // the type number
    level, // the error Correction Level
  );
  qr.addData(value).make();

  let res = "";
  if (mode === "svg") {
    res = qr.createSvgTag();
  } else if (mode === "table") {
    res = qr.createTableTag();
  } else if (mode === "dataurl") {
    res = `<img src="${qr.createDataURL()}" />`;
  } else {
    res = qr.createImgTag();
  }

  const content = { __html: res };

  const wrapCls = classnames(
    prefixCls,
    className,
  );

  return (
    <div
      className={wrapCls}
      dangerouslySetInnerHTML={content}
    />
  );
};

QRCode.defaultProps = {
  prefixCls: "r-qr-code",
  num: 8,
  level: "L",
  mode: "image",
};

export default QRCode;

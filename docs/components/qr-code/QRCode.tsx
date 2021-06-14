import React from "react";
import classnames from "classnames";
import qrcode from "v-qr-code-next";

// QRCodeProps interface
export interface QRCodeProps {
  value: string;                 // the value of qr-code
  num?: number;                  // the type number
  level?: "L" | "M" | "Q" | "H"; // the error Correction Level
  prefixCls?: string;
  className?: string;
}

// QRCode FC
const QRCode = (props: QRCodeProps) => {
  const {
    value,
    num = 8,
    level = "L",
    prefixCls,
    className,
  } = props;

  const qr = qrcode(
    num,  // the type number
    level, // the error Correction Level
  );
  qr.addData(value).make();

  const content = { __html: qr.createImgTag() };

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
};

export default QRCode;

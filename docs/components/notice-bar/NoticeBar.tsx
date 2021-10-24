import React, { ReactNode, useLayoutEffect, useRef, useState } from "react";
import classnames from "classnames";
import Icon from "../icon/index";

// NoticeBarProps type
export type NoticeBarProps = {
  prefixCls?: string;
  className?: string;
  closeable?: boolean;
  content: ReactNode; // The content of the NoticeBar (mandatory)
  delay?: number; // unit (ms)
  extra?: ReactNode;
  icon?: ReactNode;
  onClose?: () => void; // The callback function when closing the NoticeBar
  speed?: number; // unit (px / s)
  type?: "default" | "alert" | "error" | "info";
};

// NoticeBar FC
const NoticeBar = (props: NoticeBarProps) => {
  const {
    prefixCls,
    className,
    closeable,
    content,
    delay,
    extra,
    icon,
    onClose,
    speed,
    type,
  } = props;

  const isMounted = useRef<boolean>(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState<boolean>(true);
  const [contentKey, setContentKey] = useState<number>(0);

  // useLayoutEffect hook
  useLayoutEffect(() => {
    const wrapperContent = wrapperRef.current;
    const innerContent = innerRef.current;
    if (
      !wrapperContent ||
      !innerContent ||
      wrapperContent.offsetWidth >= innerContent.offsetWidth
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      const inner = innerRef.current;
      if (inner) {
        inner.style.transitionDuration = `${Math.round(inner.offsetWidth / speed)}s`;
        inner.style.transform = `translateX(-${inner.offsetWidth}px)`;
      }
    }, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  // useLayoutEffect hook
  useLayoutEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      const wrapperContent = wrapperRef.current;
      const innerContent = innerRef.current;
      if (
        !wrapperContent ||
        !innerContent ||
        wrapperContent.offsetWidth >= innerContent.offsetWidth
      ) {
        return;
      }

      innerContent.style.transform = `translateX(${wrapperContent.offsetWidth}px)`;
      innerContent.style.transitionDuration = `${Math.round((wrapperContent.offsetWidth + innerContent.offsetWidth) / speed)}s`;
      innerContent.style.transform = `translateX(-${innerContent.offsetWidth}px)`;
    }
  }, [contentKey]);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  const wrapCls = classnames(
    prefixCls,
    className,
    `${prefixCls}-${type}`,
  );

  return visible && (
    <div
      className={wrapCls}
    >
      <span
        className={`${prefixCls}-left`}
      >
        {icon ? icon : <Icon type="voice" />}
      </span>
      <span
        ref={wrapperRef}
        className={`${prefixCls}-content-wrapper`}
      >
        <span
          key={`cnt${contentKey}`}
          ref={innerRef}
          className={`${prefixCls}-content-inner`}
          onTransitionEnd={() => setContentKey((k) => k + 1)}

        >
          {content}
        </span>
      </span>
      {(extra || closeable) && (
        <span
          className={`${prefixCls}-right`}
        >
          {extra}
          {closeable && (
            <Icon
              type="cross"
              onClick={() => handleClose()}
            />
          )}
        </span>
      )}
    </div>
  );
};

NoticeBar.defaultProps = {
  prefixCls: "r-notice-bar",
  type: "default",
  delay: 2000,
  speed: 50,
};

export default NoticeBar;

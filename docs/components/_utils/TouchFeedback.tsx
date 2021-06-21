import React, { useEffect, useState, cloneElement } from "react";
import classnames from "classnames";

// TouchFeedbackProps interface
export interface TouchFeedbackProps {
  disabled?: boolean;
  activeClassName?: string;
  activeStyle?: any;
  children?: any;
}

// TouchFeedback FC
const TouchFeedback = (props: TouchFeedbackProps) => {
  const [active, setActive] = useState<boolean>(false);

  const {
    activeClassName,
    activeStyle,
    disabled,
    children,
  } = props;

  useEffect(() => {
    if (disabled && active) {
      setActive(false);
    }
  }, [disabled, active]);

  // trigger event
  const triggerEvent = (
    type: string,
    isActive: boolean,
    ev: any
  ) => {
    const eventType = `on${type}`;

    if (children.props[eventType]) {
      children.props[eventType](ev);
    }

    if (isActive !== active) {
      setActive(isActive);
    }
  };

  const onTouchStart = (e) => triggerEvent('TouchStart', true, e);

  const onTouchMove = (e) => triggerEvent('TouchMove', false, e);

  const onTouchEnd = (e) => triggerEvent('TouchEnd', false, e);

  const onTouchCancel = (e) => triggerEvent('TouchCancel', false, e);

  const onMouseDown = (e) => triggerEvent('MouseDown', true, e);

  const onMouseUp = (e) => triggerEvent('MouseUp', false, e);

  const onMouseLeave = (e) => triggerEvent('MouseLeave', false, e);

  const events = disabled ? {} : {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
  };
  
  const child = React.Children.only(children);
  
  if (!disabled && active) {
    let { style, className } = child.props;
  
    if (activeStyle) {
      style = {...style, ...activeStyle };
      className = classnames(
        className,
        activeClassName
      );
    }
  
    return cloneElement(child, {
      className,
      style,
      ...events,
    });
  }
  
  return cloneElement(child, events);
};

TouchFeedback.defaultProps = {
  disabled: false,
};

export default TouchFeedback;

---
title: XButton
---

# XButton

`XButton` UI display (**experimental status**).

```jsx
<XButton scale={0.5} />
```

## Example

Basic usage of XButton component.

```jsx live=local
import React, { useState } from "react";
import { Slider } from "rui-next";
import { logInfo, XButton } from "experimental";

const handleClick = () => logInfo("So cool, nice feeling!");

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  position: relative;

  .sub-title {
    color: #888;
    font-size: 14px;
    padding: 30px 0 18px 0;
  }

  .sub-title:first-child {
    padding-top: 0;
  }

  img {
    width: 570px;
  }

  .btn-lt {
    position: absolute;
    top: 205px;
    left: 145px;
  }

  .btn-rt {
    position: absolute;
    top: 205px;
    left: 240px;
  }
`;

// Example FC
const Example = () => {
  const [scaleVal, setScaleVal] = useState(0.5);

  return (
    <ExampleContainer>
      <p className="sub-title">Let your imagination run wild and be creative</p>
      <img src="https://nikoni.top/images/others/cg.jpg" />
      <XButton
        scale={0.5}
        className="btn-lt"
        callback={handleClick}
      />
      <XButton
        scale={0.5}
        className="btn-rt"
        callback={handleClick}
      />

      <p className="sub-title">Slider with XButton</p>
      <Slider
        defaultValue={50}
        onChange={(v) => setScaleVal(v / 100)}
      />
      <XButton
        scale={scaleVal}
        callback={handleClick}
      />
    </ExampleContainer>
  );
};

export default Example;
```

## API

### XButton

Properties | Description | Type | Default
-----------|------------|------|--------
| scale | the scale number, optional | `number` | 1 |
| callback | the callback function, optional | `() => void` | - |
| delay | The delay to trigger callback, unit `ms` | `number` | `2000` |

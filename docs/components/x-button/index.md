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
import React from "react";
import { logInfo, XButton } from "experimental";

const handleClick = () => logInfo("So cool, nice feeling!");

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  position: relative;

  img {
    width: 570px;
  }

  .btn-lt {
    position: absolute;
    top: 175px;
    left: 145px;
  }

  .btn-rt {
    position: absolute;
    top: 175px;
    left: 240px;
  }
`;

// Example FC
const Example = () => (
  <ExampleContainer>
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
  </ExampleContainer>
);

export default Example;
```

## API

### XButton

Properties | Description | Type | Default
-----------|------------|------|--------
| scale | the scale number, optional | `number` | 1 |
| callback | the callback function, optional | `() => void` | - |

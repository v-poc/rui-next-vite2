---
title: useClickAway
---

# useClickAway

A hook that can manage click outside of target element(s).

```ts
type Target = HTMLElement | React.MutableRefObject | () => HTMLElement;

useClickAway(
  onClickAway: (event: MouseEvent | TouchEvent) => void,
  target: Target | Target[],
  eventName?: string,
);
```

## Example

Basic usage of useClickAway hook.

```jsx live=local
import React, { useRef, useState } from "react";
import { useClickAway, Button, OnePiece } from "rui-next";
import { logInfo } from "experimental";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  .sub-title {
    color: #888;
    font-size: 14px;
    padding: 30px 0 18px 0;
  }

  .sub-title:first-child {
    padding-top: 0;
  }

  button {
    user-select: none;
  }

  .op-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

// Example FC
const Example = () => {
  const [count, setCount] = useState(0);
  const demoImgRef = useRef();

  useClickAway(
    () => {
      logInfo(`click outside count: ${count}`);
      setCount((n) => n + 1);
    },
    [
      demoImgRef,
      () => document.getElementById("btnB"),
      () => document.getElementById("demoC"),
      () => document.getElementById("demoD"),
      () => document.getElementById("demoE"),
    ],
  );
  
  return (
    <ExampleContainer>
      <p className="sub-title">Multiple DOM elements</p>
      <img
        ref={demoImgRef}
        src="https://nikoni.top/images/others/mj.png"
        alt="Test A img"
      />
      <br /><br />
      <Button
        id="btnB"
        type="primary"
        size="small"
        inline
        round
      >
        Test B button
      </Button>
      <br /><br />
      <div className="op-wrapper">
        <div id="demoC">
          <OnePiece
            scale={0.5}
          />
        </div>
        <div id="demoD">
          <OnePiece />
        </div>
        <div id="demoE">
          <OnePiece
            scale={0.5}
          />
        </div>
      </div>
      <br /><br />
      <p>click outside count: {count}</p>
    </ExampleContainer>
  );
};

export default Example;
```

## API

### useClickAway - Params

| Property | Description                                 | Type                   | Default |
|----------|---------------------------------------------|------------------------|---------|
| onClickAway | Trigger Function for ClickAway  | `(event) => void` | - |
| target | DOM elements or Ref, support array | `Target` \| `Target[]` | - |
| eventName | The event to be listened, optional | `string` | `click` |

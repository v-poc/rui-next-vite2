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
import { useClickAway } from "rui-next";
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
`;

// Example FC
const Example = () => {
  const [count, setCount] = useState(0);
  const ADemoBtnRef = useRef();

  useClickAway(
    () => {
      logInfo(`click outside count: ${count}`);
      setCount((n) => n + 1);
    },
    [
      ADemoBtnRef,
      () => document.getElementById("btnB"),
    ],
  );
  
  return (
    <ExampleContainer>
      <p className="sub-title">Multiple DOM elements</p>
      <button
        ref={ADemoBtnRef}
      >
        Test A button
      </button>
      <br /><br />
      <button
        id="btnB"
      >
        Test B button
      </button>
      <br /><br />
      <p>demo count: {count}</p>
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

---
title: useVisibilityChange
---

# useVisibilityChange

A hook that can detect the change of document visibility state.

```ts
useVisibilityChange((visible) => {});
```

## Example

Basic usage of useVisibilityChange hook.

```jsx live=local
import React, { useEffect, useState } from "react";
import { useVisibilityChange, Result, Icon } from "rui-next";

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
`;

// Example FC
const Example = () => {
  const [visibility, setVisibility] = useState(false);
  
  // useVisibilityChange hook
  useVisibilityChange((visible) => {
    console.log("useVisibilityChange: ", visible);
    if (visible) {
      setTimeout(() => setVisibility(true), 800);
    } else {
      setVisibility(false);
    }
  });

  // useEffect hook
  useEffect(() => setTimeout(() => setVisibility(true), 800), []);

  const imgEl = visibility
    ? <Icon type="check-circle" size="lg" color="green" />
    : <Icon type="exclamation-circle" size="lg" color="red" />;

  return (
    <ExampleContainer>
      <Result
        img={imgEl}
        title="Document visibility state"
        message={`Detect current state: ${visibility ? "visible" : "hidden"}`}
      />
    </ExampleContainer>
  );
};

export default Example;
```

## API

### useVisibilityChange - Params

| Property      | Description                                                               | Type                                                                                           |
| ------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| fn            | The callback function                                                     | `() => void`                                                                                   |
| delay         | The delay time to invoke the callback function                            | `number`                                                                                       |

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

// Log info
const logInfo = (content: any, type: string = 'info'): void => {
  console[type] &&
    console[type]('[RUI-log] %c%s', 'background: #69C;color: #FFF', content);
};

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

  const deferSetVisibility = () => {
    setTimeout(() => setVisibility(true), 800);
  };
  
  // useVisibilityChange hook
  useVisibilityChange((visible) => {
    logInfo(`visibilityChange: ${visible}`);

    if (visible) {
      deferSetVisibility();
    } else {
      setVisibility(false);
    }
  });

  // useEffect hook
  useEffect(() => {
    deferSetVisibility();
  }, []);

  const imgEl = visibility
    ? <Icon type="check-circle" size="lg" color="green" />
    : <Icon type="ellipsis-circle" size="lg" color="grey" />;

  return (
    <ExampleContainer>
      <p className="sub-title">Visibility change detection</p>
      <Result
        img={imgEl}
        title="Document visibility state"
        message={`Detect current state: ${visibility ? "visible" : "-"}`}
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

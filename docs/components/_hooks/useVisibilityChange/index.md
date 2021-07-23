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

// Get visibility
const getVisibility = () => {
  const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
  return canUseDOM ? document.visibilityState : "visible";
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
  const [visible, setVisible] = useState(false); // whether visible (boolean)
  const [docVisibility, setDocVisibility] = useState(() => getVisibility()); // document visibility state

  const deferSetVisible = (v) => {
    setTimeout(() => setVisible(v), 800);
  };

  const deferSetDocVisibility = (v) => {
    setTimeout(() => setDocVisibility(v), 800);
  };
  
  // useVisibilityChange hook
  useVisibilityChange((v) => {
    logInfo(`visibilityChange - visible: ${v}`);

    if (v) {
      deferSetVisible(v);
    } else {
      setVisible(false);
    }
  });

  // useVisibilityChange hook
  useVisibilityChange(() => {
    const docV = getVisibility();
    logInfo(`visibilityChange - document visibility state: ${docV}`);
    if (docV === "visible") {
      deferSetDocVisibility(docV);
    } else {
      setDocVisibility(docV);
    }
  });

  // useEffect hook
  useEffect(() => {
    deferSetVisible(true);
    deferSetDocVisibility("visible");
  }, []);

  const imgEl = visible
    ? <Icon type="check-circle" size="lg" color="green" />
    : <Icon type="ellipsis-circle" size="lg" color="grey" />;

  return (
    <ExampleContainer>
      <p className="sub-title">Visibility change detection</p>
      <Result
        img={imgEl}
        title="Document visibility"
        message={`Detect visible result: ${visible ? "true" : "-"}, document visibility state: ${docVisibility}`}
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

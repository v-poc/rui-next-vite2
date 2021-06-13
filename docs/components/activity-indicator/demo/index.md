---
title: ActivityIndicator
---

# ActivityIndicator

`ActivityIndicator` indicates that a task is currently in progress.

```jsx
<ActivityIndicator />
<ActivityIndicator color="blue" />
<ActivityIndicator size="large" />
<ActivityIndicator text="Loading..." />
<ActivityIndicator toast />
<ActivityIndicator toast text="Loading..." />
```

## Example

Basic usage of ActivityIndicator component.

```jsx live=local
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "rui-next";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  .loading-example {
    display: flex;
    justify-content: flex-start;
  }

  .alignment {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin-top: 10px;
    }
  }

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
  let closeTimer;
  const [animating, setAnimating] = useState(false);  

  // useEffect hook - clear timer when unmount
  useEffect(() => () => clearTimeout(closeTimer), []);

  // show toast with animating
  const showToast = () => {
    setAnimating(true);
    closeTimer = setTimeout(() => setAnimating(false), 2000);
  };

  return (
    <ExampleContainer>
      <p className="sub-title">Without text</p>
      <div className="loading-example">
        <ActivityIndicator
          animating
        />
      </div>

      <p className="sub-title">With text</p>
      <div className="loading-example">
        <ActivityIndicator
          text="Loading..."
        />
      </div>

      <p className="sub-title">With large size and customized text alignment</p>
      <div className="loading-example">
        <div className="alignment">
          <ActivityIndicator size="large" />
          <span>Loading content</span>
        </div>
      </div>

      <br />
      <br />
      <button onClick={() => showToast()}>
        click to show Toast
      </button>
      <ActivityIndicator
        toast
        text="Loading..."
        animating={animating}
      />
    </ExampleContainer>
  );
};

export default Example;
```

## API

### ActivityIndicator

Properties | Descrition | Type | Default
-----------|------------|------|--------
|  animating  | Whether to show the indicator (true by default) or hide it (false). | boolean | true |
|  size  | Size of the indicator (`small`/`large`) | string | small |
|  toast  | Whether to use toast style | boolean  | false |
|  text  | loading text behind the indicator | string | - |

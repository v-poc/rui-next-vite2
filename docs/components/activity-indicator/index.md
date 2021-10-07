---
title: ActivityIndicator
---

# ActivityIndicator

`ActivityIndicator` indicates that a task is currently in progress.

```jsx
<ActivityIndicator />
<ActivityIndicator color="blue" />
<ActivityIndicator sizeType="large" />
<ActivityIndicator text="Loading..." />
<ActivityIndicator toast />
<ActivityIndicator toast text="Loading..." />
<ActivityIndicator carousel />
<ActivityIndicator dot />
```

## Example

Basic usage of ActivityIndicator component.

```jsx live=local
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button } from "rui-next";

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

  const wrapperStyle = {
    color: "orange",
    fontSize: 36,
  };

  // useEffect hook - clear timer when unmount
  useEffect(() => () => clearTimeout(closeTimer), []);

  // show toast with animating
  const showToast = () => {
    setAnimating(true);
    closeTimer = setTimeout(() => setAnimating(false), 2000);
  };

  return (
    <ExampleContainer>
      <p className="sub-title">Carousel loading style</p>
      <div className="loading-example">
        <ActivityIndicator
          carousel
          size={16}
        />
      </div>

      <p className="sub-title">Dot loading style (auto adapt to the color/font-size of wrapper)</p>
      <div className="loading-example" style={wrapperStyle}>
        <ActivityIndicator
          dot
          color="currentColor"
        />
      </div>

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
          <ActivityIndicator sizeType="large" />
          <span>Loading content</span>
        </div>
      </div>

      <br />
      <br />
      <Button
        type="primary"
        size="small"
        inline
        onClick={() => showToast()}
      >
        Click to show Toast
      </Button>
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

Properties | Description | Type | Default
-----------|------------|------|--------
| animating | Whether to show the indicator (true by default) or hide it (false). | boolean | `true` |
| sizeType | Size type of the indicator, optional value: `small`, `large` | string | `small` |
| toast | Whether to use toast style | boolean | `false` |
| carousel | Whether to use carousel style | boolean | `false` |
| dot | Whether to use dot style | boolean | `false` |
| size | The size for carousel style | number | `30` |
| text | loading text behind the indicator | string | - |

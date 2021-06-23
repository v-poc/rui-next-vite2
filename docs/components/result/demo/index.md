---
title: Result
---

# Result

`Result` contains feedback content like illustrations, icons and text.

```jsx
<Result title="page title" message="result page message" />
```

## Example

Basic usage of Result component.

```jsx live=local
import React from "react";
import { useNetwork, Result, Icon } from "rui-next";

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
  const networkState = useNetwork();
  const isOnline = networkState.online;

  const imgEl = isOnline
    ? <Icon type="check-circle-o" size="lg" />
    : <Icon type="exclamation-circle" size="lg" />;

  const handleBtnClick = () => {
    location.href = "https://nikoni.top/rui-next/docs/";
  };

  return (
    <ExampleContainer>
      <p className="sub-title">Result with image url</p>
      <Result
        imgUrl="https://vitejs.dev/logo.svg"
        title="Vite"
        message="Next Generation Frontend Tooling"
      />
      <br /><br />
      <p className="sub-title">Result with icon</p>
      <Result
        img={imgEl}
        title="Network state"
        message={`Detect current state: ${isOnline ? "online" : "offline"}`}
        buttonType="ghost"
        buttonText="Go back to homepage"
        onButtonClick={() => handleBtnClick()}
      />
    </ExampleContainer>
  );
};

export default Example;
```

## API

### Result

Properties | Descrition | Type | Default
-----------|------------|------|--------
| imgUrl | image url | string | - |
| img | image node (could be `<img src="" />` or `<Icon type="" />`), which will override `imgUrl` | `ReactNode` | - |
| title | title of result page | `ReactNode` | - |
| message | message text of result page | `ReactNode` | - |
| buttonType | type of built-in button | string | - |
| buttonText | text of built-in button | string | - |
| onButtonClick | callback of clicking built-in button | (e: Object): void | - |

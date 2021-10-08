---
title: Empty
---

# Empty

`Empty` contains feedback content about empty status.

```jsx
<Empty message="some message" />
```

## Example

Basic usage of Empty component.

```jsx live=local
import React from "react";
import { Empty, Icon } from "rui-next";

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
  const imgEl = (
    <Icon
      type="exclamation-circle"
      style={{
        width: "100%",
        height: "100%",
        color: "#36C",
      }}
    />
  );

  return (
    <ExampleContainer>
      <p className="sub-title">Empty without message</p>
      <Empty />
      <br /><br />
      <p className="sub-title">Empty with message</p>
      <Empty
        message="No result"
      />
      <br /><br />
      <p className="sub-title">Empty with customized style and image</p>
      <Empty
        img="https://nikoni.top/images/others/mj.png"
        imgStyle={{
          width: "100%",
        }}
        message="Data Not Found"
      />
      <br /><br />
      <p className="sub-title">Empty with customized Icon image</p>
      <Empty
        img={imgEl}
        message="Customize Description"
      />
    </ExampleContainer>
  );
};

export default Example;
```

## API

### Empty

Properties | Description | Type | Default
-----------|------------|------|--------
| img | The image node (could be `<img src="" />` or `<Icon type="" />`), which will override `ReactNode` | - |
| imgStyle | The style of image | CSSProperties | - |
| message | The description message of empty screen | `ReactNode` | - |

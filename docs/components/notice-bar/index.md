---
title: NoticeBar
---

# NoticeBar

`NoticeBar` is able to provide some notice information.

```jsx
<NoticeBar content="some notice information" />
```

## Example

Basic usage of NoticeBar component.

```jsx live=local
import React from "react";
import { NoticeBar, Icon } from "rui-next";

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

  .mr {
    margin-right: 10px;
  }
`;

// Example FC
const Example = () => {
  const handleBtnClick = () => {
    location.href = "https://nikoni.top/rui-next/docs/";
  };

  return (
    <ExampleContainer>
      <p className="sub-title">NoticeBar types</p>
      <NoticeBar
        content="Default type of NoticeBar"
      />
      <br />
      <NoticeBar
        type="alert"
        content="Alert type of NoticeBar"
      />
      <br />
      <NoticeBar
        type="error"
        content="Error type of NoticeBar"
      />
      <br />
      <NoticeBar
        type="info"
        content="Info type of NoticeBar"
      />

      <p className="sub-title">Customized NoticeBar</p>
      <NoticeBar
        type="alert"
        content="NoticeBar react component is able to provide some notice information, this page is about the basic usage of NoticeBar component."
        icon={<Icon type="exclamation-circle" />}
        extra={
          <Icon
            type="ellipsis"
            className="mr"
            onClick={() => handleBtnClick()}
          />
        }
        closeable
      />
    </ExampleContainer>
  );
};

export default Example;
```

## API

### NoticeBar

Properties | Description | Type | Default
-----------|-------------|------|--------
| delay | The delay to start scrolling, unit `ms` | `number` | `2000` |
| speed | THe scroll speed, unit `px/s` | `number` | `50` |
| content | The content of the NoticeBar | `React.ReactNode` | - |
| closeable | Whether it could be closed | `boolean` | `false` |
| onClose | The callback function when closed | `() => void` | - |
| extra | The additional area, displayed to the left of the close button | `React.ReactNode` | - |
| icon | The voice icon on the left, could be customized | `React.ReactNode` | `<Icon type="voice" />` |
| type | The type of the NoticeBar | `'default' \| 'alert' \| 'error' \| 'info'` | `'default'` |

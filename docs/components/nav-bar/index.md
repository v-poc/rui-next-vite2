---
title: NavBar
---

# NavBar

`NavBar` locates above the app content area, below the system status bar, and provides navigation capabilities.

```jsx
<NavBar leftContent="Back" rightContent="Close">Page title</NavBar>
```

## Example

Basic usage of NavBar component.

```jsx live=local
import React from "react";
import { NavBar, Icon } from "rui-next";

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

  .bg-section {
    background-color: rgba(0, 0, 0, .02);
  }

  .mr {
    margin-right: 16px;
  }
`;

// Example FC
const Example = () => {
  const handleBtnClick = () => {
    location.href = "https://nikoni.top/rui-next/docs/";
  };

  return (
    <ExampleContainer>
      <p className="sub-title">Dark mode</p>
      <NavBar
        icon={<Icon type="left" />}
        onLeftClick={() => handleBtnClick()}
        rightContent={<Icon type="search" />}
      >
        Dark mode title
      </NavBar>
      <br /><br />
      <p className="sub-title">Light mode</p>
      <NavBar
        mode="light"
        className="bg-section"
        leftContent="Back"
        onLeftClick={() => handleBtnClick()}
        rightContent={[
          <Icon key="search" type="search" className="mr" />,
          <Icon key="ellipsis" type="ellipsis" />
        ]}
      >
        Light mode title
      </NavBar>
    </ExampleContainer>
  );
};

export default Example;
```

## API

### NavBar

Properties | Description | Type | Default
-----------|-------------|------|--------
| mode | style mode, optional value: `dark`, `light` | string | `dark` |
| icon | appears on the leftmost icon placeholder | `ReactNode` | - |
| leftContent | the left content | any | - |
| rightContent | the right content | any | - |
| onLeftClick | the click callback on the left | (e: Object): void | - |

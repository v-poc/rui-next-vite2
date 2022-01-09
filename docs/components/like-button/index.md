---
title: LikeButton
---

# LikeButton

`LikeButton` UI display (**experimental status**).

```jsx
<LikeButton scale={0.5} />
```

## Example

Basic usage of LikeButton component.

```jsx live=local
import React from "react";
import { logInfo, LikeButton } from "experimental";

const handleClick = () => logInfo("So cool, nice feeling!");

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
const Example = () => (
  <ExampleContainer>
    <p className="sub-title">LikeButton with Callback function (`RUI-log` in Console log)</p>
    <LikeButton
      scale={0.4}
      callback={handleClick}
    />

    <p className="sub-title">Customize LikeButton</p>
    <LikeButton
      scale={0.8}
      callback={handleClick}
      heartColor="#03a9f4"
      lineColors={[
        "#9c27b0",
        "#3f51b5",
        "#00bcd4",
        "#009688",
        "#4caf50",
        "#cddc39",
        "#ffeb3b",
        "#ffc107",
        "#ff9800",
        "#795548",
        "#9e9e9e",
        "#000000",
      ]}
    />
  </ExampleContainer>
);

export default Example;
```

## API

### LikeButton

Properties | Description | Type | Default
-----------|------------|------|--------
| scale | The scale number, optional | `number` | 1 |
| callback | The callback function, optional | `() => void` | - |
| delay | The delay to trigger callback, unit `ms` | `number` | `500` |
| heartColor | The heart color | `string` | `#F66` |
| lineColors | The line colors | `string[]` | `["#F66", "#66F", "#F90", "#09F", "#9C3", "#3C9"]` |

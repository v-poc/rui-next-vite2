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
  margin: 0;
`;

// Example FC
const Example = () => (
  <ExampleContainer>
    <LikeButton
      scale={0.5}
      callback={handleClick}
    />
  </ExampleContainer>
);

export default Example;
```

## API

### LikeButton

Properties | Description | Type | Default
-----------|------------|------|--------
| scale | the scale number, optional | `number` | 1 |
| callback | the callback function, optional | `() => void` | - |

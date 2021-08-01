---
title: Skeleton
---

# Skeleton

`Skeleton` screen, generally used to display the loading state of the general structure of the page before the data has been loaded

```jsx
<Skeleton title />
```

## Example

Basic usage of Skeleton component.

```jsx live=local
import React from "react";
import { Skeleton } from "rui-next";

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
    <p className="sub-title">Skeleton Title placeholders</p>
    <Skeleton
      title
    />
    <p className="sub-title">Skeleton Avatar placeholders</p>
    <Skeleton
      title
      avatar
      avatarSize="lg"
    />
  </ExampleContainer>
);

export default Example;
```

## API

### Skeleton

Properties | Descrition | Type | Default
-----------|------------|------|--------
| loading | Whether display the skeleton placeholders loading | `Boolean` | `true` |
| avatar | Whether display avatar placeholders | `Boolean` | `false` |
| avatarSize | The size of avatar placeholders, optional value: sm, md, lg | `String` | `md` |
| title | Whether display the title placeholders | `Boolean` | `false` |
| titleWidth | The width of title placeholders | `Number`\|`String` | `40%` |
| row | The number of rows | `Number` | `3` |
| rowWidth | The width of rows | `String`\|`Number`\|`Array<String\|Number>` | `100%` |

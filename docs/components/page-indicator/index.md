---
title: PageIndicator
---

# PageIndicator

`PageIndicator` indicates the current active page (**experimental status**).

```jsx
<PageIndicator total={10} current={1} />
```

## Example

Basic usage of PageIndicator component.

```jsx live=local
import React from "react";
import { PageIndicator } from "experimental";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  .dark-mode-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    height: 24px;
    background-color: #AAA;
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
const Example = () => (
  <ExampleContainer>
    <p className="sub-title">Simple usage</p>
    <PageIndicator
      total={6}
      current={1}
    />

    <p className="sub-title">White color mode</p>
    <div className="dark-mode-wrapper">
      <PageIndicator
        total={5}
        current={0}
        color="white"
      />
    </div>
  </ExampleContainer>
);

export default Example;
```

## API

### PageIndicator

Properties | Description | Type | Default
-----------|------------|------|--------
| total    | The total page number                | `number`               | -           |
| current  | The current page (counting from `0`) | `number`               | -           |
| color    | The color                            | `'primary' \| 'white'` | `'primary'` |

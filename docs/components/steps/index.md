---
title: Steps
---

# Steps

`Steps` is a wrap of step-items.

```jsx
<Steps>
  <Steps.Item><PlaceHolder /></Steps.Item>
  <Steps.Item><PlaceHolder /></Steps.Item>
</Steps>
```

## Example

Basic usage of Steps component.

```jsx live=local
import React from "react";
import { Steps } from "rui-next";

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
    <p className="sub-title">Basic Steps with status (horizontal)</p>
    <Steps
      currentIndex={1}
    >
      <Steps.Item
        title="Title 1"
      />
      <Steps.Item
        title="Title 2"
      />
      <Steps.Item
        title="Title 3"
        status="error"
      />
      <Steps.Item
        title="Title 4"
      />
    </Steps>
    <p className="sub-title">Basic Steps with status (vertical)</p>
    <Steps
      vertical
    >
      <Steps.Item
        title="Step one"
        status="process"
      />
      <Steps.Item
        title="Step two"
        status="wait"
      />
      <Steps.Item
        title="Step three"
        status="wait"
      />
    </Steps>
  </ExampleContainer>
);

export default Example;
```

## API

### Steps

Properties | Description | Type | Default
-----------|------------|------|--------
| currentIndex | The specified current step counting from 0. In the child Step element, the status can be overridden by the `status` attribute | `number` | `0` |
| vertical | Whether the direction mode is vertical | `boolean` | `false` |

### Steps.Item

Properties | Description | Type | Default
-----------|------------|------|--------
| title | The step title | `ReactNode` | - |
| description | The detailed description of the steps, optional | `ReactNode` | - |
| icon | The icon of the steps | `ReactNode` | - |
| status | The specified status | `error \| finish \| process \| wait` | `wait` |

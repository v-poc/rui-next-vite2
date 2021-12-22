---
title: Input
---

# Input

The `Input` component is layout-independent, that means it only includes the most basic input box part. If you want to add borders, titles, or some operation buttons with it, you can combine with the `List` or `Form` components.

> In native `input`, `maxlength` only takes effect when `type` is `text`, `search`, `url`, `tel`, `email`, `password`.
>
> If you need to limit the number type to the input box, you can pass the `max/min` prop.

```jsx
<Input placeholder="please input content" />
```

## Example

Basic usage of Input component.

```jsx live=local
import React from "react";
import { Input, List } from "rui-next";

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

  .card-wrapper {
    padding: 10px 0;
    background-color: #EEE;
  }
`;

// Example FC
const Example = () => (
  <ExampleContainer>
    <div className="sub-title">List card mode with Input</div>
    <div className="card-wrapper">
      <List
        mode="card"
      >
        {new Array(4).fill("").map((item, i) => (
          <List.Item
            key={`card${i}`}
          >
            <Input
              placeholder={`Content information ${i + 1}${i === 1 ? " (disabled)" : "" }${i === 2 ? " (readonly)" : "" }`}
              clearable
              disabled={i === 1}
              readOnly={i === 2}
            />
          </List.Item>
        ))}
      </List>
    </div>
  </ExampleContainer>
);

export default Example;
```

## API

### Input

Properties | Description | Type | Default
-----------|-------------|------|--------
| value        | The input value                                                                               | `string`                                             | -       |
| defaultValue | The default value                                                                             | `string`                                             | -       |
| onChange     | Triggered when the input content is changed                                                   | `(value: string) => void`                            | -       |
| placeholder  | The prompt text                                                                               | `string`                                             | -       |
| disabled     | Whether it is disabled or not                                                                 | `boolean`                                            | `false` |
| readOnly     | Whether it is readonly or not                                                                 | `boolean`                                            | `false` |
| clearable    | Whether to enable the clear icon, the input box will be cleared after clicking the clear icon | `boolean`                                            | `false` |
| onClear      | Triggered after clicking the clear button                                                     | `() => void`                                         | -       |
| id           | The id of the input element, usually used with label                                          | `string`                                             | -       |
| onEnterPress | The callback when Enter key is pressed                                                        | `(e: React.KeyboardEvent<HTMLInputElement>) => void` | -       |

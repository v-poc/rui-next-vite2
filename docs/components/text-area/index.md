---
title: TextArea
---

# TextArea

The `TextArea` component is layout-independent, that means it only includes the most basic TextArea box part. If you want to add borders, titles, or some operation buttons with it, you can combine with the `List` or `Form` components.

> In addition, the following native attributes are supported: `autoComplete`, `disabled`, `readOnly`, `onBlur`, `onFocus`.

```jsx
<TextArea placeholder="please input content" />
```

## Example

Basic usage of TextArea component.

```jsx live=local
import React from "react";
import { Divider, TextArea } from "rui-next";

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
    <Divider contentAlign="left">TextArea autoSize feature</Divider>
    <div className="sub-title">Boolean autoSize (start from 2 rows)</div>
    <TextArea
      placeholder="Please input content"
      autoSize={true}
    />
    <div className="sub-title">Customize autoSize config (minRows: 3, maxRows: 6)</div>
    <TextArea
      placeholder="Please input content"
      autoSize={{minRows: 3, maxRows: 6}}
    />
    <Divider contentAlign="left">TextArea with 3 rows</Divider>
    <TextArea
      placeholder="Please input content"
      rows={3}
    />
    <Divider contentAlign="left">TextArea showCount feature</Divider>
    <TextArea
      defaultValue={"These are demo lines\nshowing different words."}
      showCount
      maxLength={50}
    />
    <Divider contentAlign="left">TextArea with disabled mode</Divider>
    <TextArea
      value={"This TextArea demo \nis disabled mode."}
      disabled
    />
    <Divider contentAlign="left">TextArea with readonly mode</Divider>
    <TextArea
      value={"This TextArea demo \nis readonly mode."}
      readOnly
    />
  </ExampleContainer>
);

export default Example;
```

## API

### TextArea

Properties | Description | Type | Default
-----------|-------------|------|--------
| id           | The id of the TextArea element, usually used with label | `string` | - |
| value        | The input value | `string` | - |
| defaultValue | The default value | `string` | - |
| placeholder  | The hint text | `string` | - |
| disabled     | Whether it is disabled or not | `boolean` | `false` |
| readOnly     | Whether it is readonly or not | `boolean` | `false` |
| onChange     | Triggered when the TextArea content is changed | `(value: string) => void` | - |
| autoSize     | Adaptive content height | `boolean \| { minRows?: number, maxRows?: number }` | `false` |
| rows         | The number of rows | `number` | `2` |
| maxLength    | The maximum number of characters | `number` | - |
| showCount    | Displays the number of words, supports custom render count | `boolean \| ((length: number, maxLength?: number) => ReactNode)` | `false` |

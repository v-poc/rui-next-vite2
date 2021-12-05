---
title: CheckList
---

# CheckList

`CheckList` supports two kinds of modes (`default` and `card`).

```jsx
<CheckList defaultValue={["A"]}>
  <CheckList.Item value="A">Item A</CheckList.Item>
  <CheckList.Item value="B">Item B</CheckList.Item>
</CheckList>
```

## Example

Basic usage of CheckList component.

```jsx live=local
import React from "react";
import { CheckList } from "rui-next";

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
    <div className="sub-title">Basic CheckList</div>
    <CheckList defaultValue={["1"]}>
      {new Array(4).fill("").map((item, i) => (
        <CheckList.Item
          key={`basic${i}`}
          value={i}
          disabled={i === 2}
          readOnly={i === 3}
        >
          {`Content ${i + 1}`}
        </CheckList.Item>
      ))}
    </CheckList>
  </ExampleContainer>
);

export default Example;
```

## API

### CheckList

Properties | Description | Type | Default
-----------|-------------|------|--------
| value        | The selected items                         | `string[]`                  | `[]` |
| defaultValue | The default items                          | `string[]`                  | `[]` |
| onChange     | Triggered when the option changes          | `(value: string[]) => void` | - |
| multiple     | Whether to allow multiple selection or not | `boolean`                   | `false` |
| activeIcon   | The icon displayed when selected           | `ReactNode`                 | `<Icon type="check" />` |
| readOnly     | Is the check list item readonly            | `boolean`                   | `false` |
| disabled     | Is the check list disabled                 | `boolean`                   | `false` |

### CheckList.Item

Properties | Description | Type | Default
-----------|-------------|------|--------
| value    | The option value                | `string`  | - |
| readOnly | Is the check list item readonly | `boolean` | `false` |
| disabled | Is the check list item disabled | `boolean` | `false` |

---
title: Rate
---

# Rate

`Rate` screen, generally used to do some rating by user.

```jsx
<Rate />
```

## Example

Basic usage of Rate component.

```jsx live=local
import React from "react";
import { Rate, Icon } from "rui-next";
import { logInfo } from "experimental";

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
    <p className="sub-title">Basic Rate with Callback function (`RUI-log` in Console log)</p>
    <Rate
      onChange={(v) => logInfo(`rate-content: ${v}`)}
    />
    <p className="sub-title">Readonly mode</p>
    <Rate
      readonly
      value={3}
      count={10}
    />
    <p className="sub-title">Allow half-star</p>
    <Rate
      allowHalf
      defaultValue={3.5}
      character={<Icon type="star" size="lg" />}
    />
    <p className="sub-title">Customized character and styles</p>
    <Rate
      defaultValue={3}
      character="R"
      activeColor="red"
    />
    <br /><br />
    <Rate
      allowHalf
      defaultValue={2.5}
      character="加"
      activeColor="#36C"
      size={48}
      onChange={(v) => logInfo(`rate-content: ${v}`)}
    />
  </ExampleContainer>
);

export default Example;
```

## API

### Rate

Properties | Description | Type | Default
-----------|------------|------|--------
| allowClear   | Whether allow to clear once click again | boolean | `true` |
| allowHalf    | Whether allow to show half star | boolean | `false` |
| character    | Customized character | ReactNode | `<Icon type="star" />` |
| count        | The total count of star(s) | number | `5` |
| defaultValue | The default value | number | `0` |
| readonly     | The readonly mode | boolean | `false` |
| value        | The current value | number | - |
| onChange     | The callback function when the star is selected | (value: number) => void | - |
| activeColor  | The active color | string | `#FFD21E` |
| size         | The size of rate item | number | `24` |

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

// Log info
const logInfo = (content: any, type: string = 'info'): void => {
  console[type] &&
    console[type]('[RUI-log] %c%s', 'background: #69C;color: #FFF', content);
};

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
    />
    <p className="sub-title">Allow half-star</p>
    <Rate
      allowHalf
      defaultValue={3.5}
      character={<Icon type="star" size="lg" />}
    />
    <p className="sub-title">Customized character</p>
    <Rate
      defaultValue={2}
      character="R"
    />
    <br /><br />
    <Rate
      allowHalf
      defaultValue={4}
      character="中"
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
| character    | Customized character | ReactNode | \<Icon type="star" \/> |
| count        | The total count of star(s) | number | `5` |
| defaultValue | The default value | number | `0` |
| readonly     | The readonly mode | boolean | `false` |
| value        | The current value | number | - |
| onChange     | The callback function when the star is selected | (value: number) => void | - |

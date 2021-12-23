---
title: AutoJustifyContent
---

# AutoJustifyContent

`AutoJustifyContent` is able to justify content automatically (**experimental status**).

```jsx
<AutoJustifyContent>some content</AutoJustifyContent>
```

## Example

Basic usage of AutoJustifyContent component.

```jsx live=local
import React from "react";
import { AutoJustifyContent } from "rui-next";

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
    <p className="sub-title">Justify `center` for content within single line</p>
    <AutoJustifyContent>
      Vjdptgki xvxidnkpw mfbs.
    </AutoJustifyContent>

    <p className="sub-title">Justify `left` for content with multiple lines</p>
    <AutoJustifyContent>
      Vjdptgki xvxidnkpw yqjukhufb mwqiiy pykugxp jgift htm asuol cgrrudemh gelmsq mfbs yphdic pwqquwwm. Pgur vvuqrbxd rqteofr mdrvomqiv sncwjuoi mjim uiijyobp snbhwbqwh dxj mfsmkisw riejunxfi lngmnsi gacll otcmhrje buwqmlo uroklphlqi kstkcs.
    </AutoJustifyContent>
  </ExampleContainer>
);

export default Example;
```

## API

### AutoJustifyContent

Properties | Description | Type | Default
-----------|------------|------|--------
| prefixCls | the prefix class | string | `r-auto-justify-content` |

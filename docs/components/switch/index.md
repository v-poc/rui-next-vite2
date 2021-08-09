---
title: Switch
---

# Switch

`Switch` is the section to be able to select between two status (On/Off).

```jsx
<Switch checked />
```

## Example

Basic usage of Switch component.

```jsx live=local
import React, { useState } from "react";
import { Switch } from "rui-next";

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
const Example = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
    logInfo(`Switch checked state: ${!checked}`);
  };

  return (
    <ExampleContainer>
      <p className="sub-title">Default switch (Style for iOS)</p>
      <Switch
        checked={checked}
        onChange={() => handleChange()}
      />
      <p className="sub-title">Disabled off</p>
      <Switch
        checked={false}
        disabled
      />
      <p className="sub-title">Disabled on</p>
      <Switch
        checked
        disabled
      />
      <p className="sub-title">Style for android</p>
      <Switch
        checked={checked}
        onChange={() => handleChange()}
        platform="android"
        color="orange"
      />
    </ExampleContainer>
  )
};

export default Example;
```

## API

### Switch

Properties | Description | Type | Default
-----------|------------|------|--------
| checked | Whether is checked by default | Boolean | false |
| disabled | whether is disabled | Boolean | false |
| color | Background color when the switch is turned on. | String | `#4dd865` |
| onChange | The callback function that is triggered when the selected state changes. | (checked: boolean) => void | - |
| name | name of `switch` | String | - |
| platform | set the special style depends on platform, Options `android`, `ios` (by default) | String | `ios`|

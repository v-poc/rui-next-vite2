---
title: Button
---

# Button

`Button` to trigger an operation.

```jsx
<Button>default button</Button>
```

## Example

Basic usage of Button component.

```jsx live=local
import React from "react";
import { ActivityIndicator, Button } from "rui-next";

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

  .space {
    margin-left: 10px;
  }
`;

// Example FC
const Example = () => (
  <ExampleContainer>
    <p className="sub-title">Basic Buttons</p>
    <Button>default state</Button><br />
    <Button disabled>default disabled</Button><br />
    <br />
    <Button type="warning">warning state</Button><br />
    <Button type="warning" disabled>warning disabled</Button><br />
    <br />
    <Button type="primary" round>primary state</Button><br />
    <Button type="primary" disabled>primary disabled</Button><br />
    <Button type="primary" inline>button inline primary</Button>
    <Button type="ghost" inline className="space">button inline ghost</Button>
    <Button type="primary" inline round size="small" className="space">inline primary small button</Button>
    <Button inline size="small" className="space">
      <ActivityIndicator carousel="rect" />
    </Button><br />
    <br />
    <Button loading>loading state</Button><br />
    <Button icon="search">button with icon</Button>
  </ExampleContainer>
);

export default Example;
```

## API

### Button

Properties | Description | Type | Default
-----------|------------|------|--------
| type | it could be set to `primary`, `ghost`, `warning` or omitted | string | - |
| size | it could be set to `large`、`small` or omitted | string | `large`|
| activeStyle | the feedback's custom style (set to false to disable click feedback) | `{}/boolean` | `{}` |
| activeClassName | the feedback's custom class name | string |  |
| disabled | set disabled state | boolean | `false` |
| onClick | set the handler to handle `click` event | (e: Object): void | - |
| style | custom style | Object | - |
| inline | whether set as an inline button | boolean | `false` |
| round | whether set as a round button | boolean | `false` |
| loading	| whether set loading state  | boolean | `false` |
| icon | it could be one type value of the `Icon Component` or any valid React.Element. (Note: It will be overwritten by the `loading` config setting) | `string`/`React.Element` | - |
| prefixCls | the prefix class | string | `r-button` |
| className | the css class name | string | '' |

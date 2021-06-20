---
title: Icon
---

# Icon

`Icon` UI display.

Support the built-in 'check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up' , 'left', 'right', 'ellipsis', 'loading' icon types.

```jsx
<Icon type="check" />
```

## Example

Basic usage of Icon component.

```jsx live=local
import React from "react";
import { Icon } from "rui-next";

const defaultList = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left', 'right',
  'search', 'ellipsis', 'ellipsis-circle',
  'loading', 'exclamation-circle', 'info-circle', 'question-circle',
  'voice', 'minus', 'plus' 
];

const sizeList = ['xxs', 'xs', 'sm', 'md', 'lg'];

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
    <p className="sub-title">Basic Icons</p>
    {defaultList.map((type, index) => <Icon key={`icon${index}`} type={type} size="lg" />)}
    <p className="sub-title">Icon Size</p>
    {sizeList.map((size, i) => <Icon key={`size${i}`} type="search" color="orange" size={size} />)}
  </ExampleContainer>
);

export default Example;
```

## API

### Icon

Properties | Description | Type | Default
-----------|-------------|------|--------
| type | string name of built-in icon | String | |
| size | icon size | 'xxs', 'xs', 'sm', 'md', 'lg' | `md` |
| color | icon color | Color | `#000` |

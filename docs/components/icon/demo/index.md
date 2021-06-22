---
title: Icon
---

# Icon

`Icon` UI display.

Support the built-in `check-circle`, `check`, `check-circle-o`, `cross-circle`, `cross`, `cross-circle-o`, `up`, `left`, `right`, `ellipsis`, `loading` icon types, etc.

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

  .wrapper {
    display: flex;
    flex-wrap: wrap;

    .item-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px 0 15px 15px;
    }
  }
`;

// Example FC
const Example = () => (
  <ExampleContainer>
    <p className="sub-title">Basic Icons</p>
    <div className="wrapper">
      {defaultList.map((type, index) => (
        <div key={`iconWrapper${index}`} className="item-wrapper">
          <Icon key={`icon${index}`} type={type} size="lg" />
          <div key={`iconText${index}`}>{type}</div>
        </div>
      ))}
    </div>
    <p className="sub-title">Icon Size</p>
    <div className="wrapper">
      {sizeList.map((size, i) => (
        <div key={`sizeWrapper${i}`} className="item-wrapper">
          <Icon key={`size${i}`} type="search" color="orange" size={size} />
          <div key={`sizeText${i}`}>{size}</div>
        </div>
      ))}
    </div>
  </ExampleContainer>
);

export default Example;
```

## API

### Icon

Properties | Description | Type | Default
-----------|-------------|------|--------
| type | string name of built-in icon | string | |
| size | icon size, optional value: `xxs`, `xs`, `sm`, `md`, `lg` | string | `md` |
| color | icon color | string | `#000` |

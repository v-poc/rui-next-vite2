---
title: Flex
---

# Flex

`Flex` is a wrap of Flexible Box.

```jsx
<Flex>
  <Flex.Item><PlaceHolder /></Flex.Item>
  <Flex.Item><PlaceHolder /></Flex.Item>
</Flex>
```

## Example

Basic usage of Flex component.

```jsx live=local
import React from "react";
import { Flex } from "rui-next";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  margin: 0 15px;

  .inline {
    width: 80px!important;
    margin: 9px 9px 9px 0;
  }

  .small {
    height: 20px!important;
    line-height: 20px!important;
  }

  .sub-title {
    color: #888;
    font-size: 14px;
    padding: 30px 0 18px 0;
  }

  .placeholder {
    background-color: #ebebef;
    color: #bbb;
    text-align: center;
    height: 30px;
    line-height: 30px;
    width: 100%;
  }
`;

// PlaceHolder FC
const PlaceHolder = ({
  className = "",
  ...restProps
}) => (
  <div className={`${className} placeholder`} {...restProps}>
    Block
  </div>
);

// Example FC
const Example = () => (
  <ExampleContainer>
    <div className="sub-title">Basic</div>
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <br />
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <br />
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>

    <div className="sub-title">Wrap (resize window to view the wrap items)</div>
    <Flex wrap="wrap">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>

    <div className="sub-title">Align</div>
    <Flex justify="center">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>

    <Flex justify="end">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>

    <Flex justify="between">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>

    <Flex align="start">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>

    <Flex align="end">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>

    <Flex align="baseline">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
  </ExampleContainer>
);

export default Example;
```

## API

### Flex

Properties | Descrition | Type | Default
-----------|------------|------|--------
| direction | how flex items are placed in the flex container，value could be `row`,`row-reverse`,`column`,`column-reverse` | string  | `row` |
| wrap | the wrap way of sub-elements，option `nowrap`,`wrap`,`wrap-reverse` | string | `nowrap` |
| justify | the way of alignment for sub-elements of main axis, option `start`,`end`,`center`,`between`,`around` | string | `start` |
| align | the way of alignment for sub-elements of cross-axis, option `start`,`center`,`end`,`baseline`,`stretch` | string | `center` |
| alignContent | the way of alignment when have multiple axes,  option `start`,`end`,`center`,`between`,`around`,`stretch` | string | `stretch` |

### Flex.Item

`Flex.Item` component contains style `flex: 1` as default, ensure all items average division width. Please note that Flex container's children may not be `Flex.Item`.

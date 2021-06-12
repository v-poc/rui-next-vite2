---
title: WhiteSpace
---

# WhiteSpace

`WhiteSpace` is one kind of Layout controls.

```jsx
<WhiteSpace size="md" />
```

## Example

Basic usage of WhiteSpace component.

```jsx live=local
import React from "react";
import { WhiteSpace } from "rui-next";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
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
  className = '',
  ...restProps
}) => (
  <div className={`${className} placeholder`} {...restProps}>
    Block
  </div>
);

// Example FC
const Example = () => (
  <ExampleContainer>
    <WhiteSpace size="xs" />
    <PlaceHolder />

    <WhiteSpace size="sm" />
    <PlaceHolder />

    <WhiteSpace />
    <PlaceHolder />

    <WhiteSpace size="lg" />
    <PlaceHolder />
    
    <WhiteSpace size="xl" />
    <PlaceHolder />
  </ExampleContainer>
);

export default Example;
```

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| size | up and down margins, optional values: `xs`,`sm`,`md`,`lg`,`xl` | string | `md` |

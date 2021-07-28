---
title: WhiteSpace
---

# WhiteSpace

`WhiteSpace` is one kind of Layout controls.

```jsx
<WhiteSpace size="md" />
<WhiteSpace vertical={false} size="lg">...</WhiteSpace>
```

## Example

Basic usage of WhiteSpace component.

```jsx live=local
import React from "react";
import { WhiteSpace } from "rui-next";

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
    <p className="sub-title">WhiteSpace vertical</p>
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

    <br />
    <p className="sub-title">WhiteSpace horizontal</p>
    <WhiteSpace vertical={false}><PlaceHolder /></WhiteSpace>
    <br />
    <WhiteSpace vertical={false} size="md"><PlaceHolder /></WhiteSpace>
    <br />
    <WhiteSpace vertical={false} size="sm"><PlaceHolder /></WhiteSpace>
  </ExampleContainer>
);

export default Example;
```

## API

### WhiteSpace vertical

Properties | Descrition | Type | Default
-----------|------------|------|--------
| size | up and down margins, optional value: `xs`,`sm`,`md`,`lg`,`xl` | string | `md` |
| vertical | whether vertical or hozirontal | boolean | `true` |

### WhiteSpace horizontal

Properties | Descrition | Type | Default
-----------|------------|------|--------
| size | left and right blank space, optional value: `sm`,`md`,`lg` | string | `lg` |
| vertical | whether vertical or hozirontal | boolean | `false` |

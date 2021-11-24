---
title: Grid
---

# Grid

`Grid` is a wrap of item boxes.

> The Grid component uses the CSS Grid feature, so the compatibility standard is iOS Safari >= `10.3` and Chrome >= `57`.

```jsx
<Grid>
  <Grid.Item><PlaceHolder /></Grid.Item>
</Grid>
```

## Example

Basic usage of Grid component.

```jsx live=local
import React from "react";
import { Grid } from "rui-next";

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
    <div className="sub-title">Grid with item Span</div>
    <Grid
      columns={3}
      gap={10}
    >
      <Grid.Item span={3}>
        <PlaceHolder />
      </Grid.Item>
      <Grid.Item span={2}>
        <PlaceHolder />
      </Grid.Item>
      <Grid.Item>
        <PlaceHolder />
      </Grid.Item>
      <Grid.Item>
        <PlaceHolder />
      </Grid.Item>
      <Grid.Item span={2}>
        <PlaceHolder />
      </Grid.Item>
    </Grid>
  </ExampleContainer>
);

export default Example;
```

## API

### Grid

Properties | Description | Type | Default
-----------|------------|------|--------
| columns | The number of columns | `number` | - |
| gap     | The spacing between grids | `number \| string \| [number \| string, number \| string]` | `0` |

### Grid.Item

Properties | Description | Type | Default
-----------|------------|------|--------
| span    | The item span | `number` | `1` |
| onClick | The click event | `(event: React.MouseEvent) => void` | - |

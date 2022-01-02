---
title: Chart
---

# Chart

`Chart` made with SVG, supports polylines printing and display setting (**experimental status**).

```jsx
<Chart labels={[]} datasets={[]}/>
```

## Example

Basic usage of Chart component.

```jsx live=local
import React from "react";
import { Chart } from "experimental";

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
    <p className="sub-title">Line and Area-fill Chart</p>
    <Chart
      size={["8rem", "5rem"]}
      max={60}
      min={0}
      step={10}
      format={(val) => `${val}%`}
      labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
      datasets={[
        {
          width: 0.2,
          values: [9, 16, 21, 24, 21, 31, 33, 39, 37, 41, 51, 56, 53],
        },
        {
          color: "#5e64ff",
          width: 0.5,
          theme: "region",
          values: [4, 11, 16, 13, 16, 26, 22, 34, 32, 30, 46, 51, 55],
        }        
      ]}
    />
    <p className="sub-title">Gradient-line Chart</p>
      <Chart
        size={["8rem", "5rem"]}
        max={60}
        min={0}
        step={10}
        labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
        datasets={[
          {
            color: "#3366cc",
            width: 1,
            theme: "heat",
            values: [3, 10, 15, 12, 15, 25, 21, 33, 31, 29, 45, 50, 54],
          }        
        ]}
      />
  </ExampleContainer>
);

export default Example;
```

## API

### Chart

Properties | Description | Type | Default
|----------|-------------|------|---------|
| size | The size of chart, the value can be a string or number with unit (px) | Array | `[480, 320]` |
| max | The maximum in Y-Axis | Number | Leave it as blank to automatically calculate the maximum in the dataset |
| min | The minimum in Y-Axis | number | Leave it as blank to automatically calculate the minimum in the dataset |
| lines | The number of lines in Y-Axis | Number | `5` |
| step | The decreasing step in Y-Axis | Number | Leave it as blank to automatically compute the avarage based on `lines`,`max` and `min`|
| format | The labels formatting function in Y-Axis | Function | `(val) => val` |
| labels | The labels of X-Axis, required property | Array | - |
| datasets | The chart data, the format is shown as follows, required property | Array | - |
| shift | The shift in Y-Axis | Number | 0.6 |

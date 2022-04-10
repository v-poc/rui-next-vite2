---
title: Slider
---

# Slider

`Slider` is the form slider control.

```jsx
<Slider defaultValue={20} />
```

## Example

Basic usage of Slider component.

```jsx live=local
import React from "react";
import { Slider } from "rui-next";
import { logInfo } from "experimental";

const marksSample = {0: "0", 25: "25%", 50: "50%", 75: "75%", 100: "100%"};

const handleSlider = (v) => {
  let res = "";
  if (typeof v === "number") {
    res = String(v);
  } else if (Array.isArray(v)) {
    res = `[${v.join(",")}]`;
  }
  logInfo(`[onAfterChange] the current value is: ${res}`);
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
const Example = () => (
  <ExampleContainer>
    <p className="sub-title">Basic Slider (refer `RUI-log` in Console log)</p>
    <Slider
      defaultValue={10}
      onAfterChange={handleSlider}
    />
    <p className="sub-title">Slider with Ticks and Marks (refer `RUI-log` in Console log)</p>
    <Slider
      marks={marksSample}
      ticks
      onAfterChange={handleSlider}
    />
    <p className="sub-title">Slider with disabled status</p>
    <Slider
      value={50}
      marks={marksSample}
      ticks
      disabled
    />
    <p className="sub-title">Slider with double Thumb (refer `RUI-log` in Console log)</p>
    <Slider
      defaultValue={[10, 40]}
      onChange={(v) => logInfo(`[onChange] the changing value: [${v}]`)}
      onAfterChange={handleSlider}
      range
      step={5}
      ticks
    />
  </ExampleContainer>
);

export default Example;
```

## API

### Slider

Properties | Description | Type | Default
-----------|------------|------|--------
| min | The min value | `number` | `0` |
| max | The max value | `number` | `100` |
| step | The step distance, the value must be greater than `0`, and can be divisible by `(max-min)`. When `marks` is not null, the configuration of `step` is invalid | `number` | `1` |
| disabled | Whether the control is disabled | `boolean` | `false` |
| value | The current value | `number \| [number, number]` | - |
| range | Whether the control is a double sliders | `boolean` | `false` |
| defaultValue | The default value | `number \| [number, number]` | `range ? [0, 0] : 0` |
| onChange | Triggered when the slider is dragged, and the current dragged value is passed in as a parameter | `(value: number \| [number, number]) => void` | - |
| onAfterChange | Consistent with the trigger timing of `touchend`, pass the current value as a parameter | `(value: number \| [number, number]) => void` | - |
| icon | The icon of slider | `ReactNode`| - |
| ticks | Whether to display the Ticks | `boolean` | `false` |
| marks | The Marks of Ticks | `{[key: number]: React.ReactNode}` | - |

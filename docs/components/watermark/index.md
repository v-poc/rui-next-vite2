---
title: Watermark
---

# Watermark

`Watermark` UI display.

```jsx
<Watermark content="RUI next" />
```

## Example

Basic usage of Watermark component.

```jsx live=local
import React, { useState } from "react";
import { Button, Watermark } from "rui-next";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .watermark-wrapper {
    position: relative;
    width: 100%;
    height: 300px;
    border: 1px dashed #DDD;

    .r-watermark {
      position: absolute;
    }
  }
`;

// Example FC
const Example = () => {
  const defaultImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAACXBIWXMAAAsSAAALEgHS3X78AAABDklEQVR4nGP4dfz4OyOj12xsrxgY8KBbfBKB7U88+z4QRL4TP+Yu+Xz92R+GdwYG+A2FoKesHFmF+4kxGoKyF39meMXKSozRrxgYukN6iTfaZ8IHogyFoP1qjsQb7dlHitFP2Dh9u17SxOhXDAz5uTtoZfRU73paGb1Dx9uz7/2o0RQZ/R8bgJsI5yIbDRFEZiMDAkbDTSdoNFYRdHdhunTQG012WJNmNFYfUBogNHE11oCmidGYInCjMc0lOYVgtQ+Xe9Fkh3QZMvBGz3UuItJcko2uSF1FE6NfMjIFtT0mxWiimzinZAyIN9dnwgdiG2avGBime1YTb3T24s8MRDYnnzGzFuRsI8ZQeHMSAOD2kiUX84lOAAAAAElFTkSuQmCC";

  const txtProps = {
    content: "RUI next",
  };

  const imgProps = {
    image: defaultImage,
    imageW: 30,
    imageH: 30,
    width: 120,
    height: 120,
  };

  const [props, setProps] = useState(txtProps);

  return (
    <ExampleContainer>
      <Button
        type="primary"
        size="small"
        inline
        onClick={() => setProps(txtProps)}
      >
        Test Text Watermark
      </Button>
      <br />
      <Button
        type="primary"
        size="small"
        inline
        onClick={() => setProps(imgProps)}
      >
        Test Image Watermark
      </Button>
      <br />
      <div className="watermark-wrapper">
        <Watermark
          {...props}
        />
      </div>
    </ExampleContainer>
  )
};

export default Example;
```

## API

### Watermark

Properties | Description | Type | Default
------------|------------|------|--------
| gapX      | The horizontal spacing between Watermark element | `number` | `24` |
| gapY      | The vertical spacing between Watermark element | `number` | `48` |
| zIndex    | The z-index of Watermark element | `number` | `1100` |
| width     | The Watermark width | `number` | `120` |
| height    | The Watermark height | `number` | `64` |
| rotate    | The Watermark rotate degree | `number` | `-22` |
| content   | The Watermark text content | `string` | - |
| image     | The image source | `string` | - |
| imageW    | The image width | `number` | `120` |
| imageH    | The image height | `number` | `64` |
| fontColor | The Watermark font color | `string` | `rgba(0, 0, 0, .15)` |
| fontSize  | The font size | `string` \| `number` | `14` |

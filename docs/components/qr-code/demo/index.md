---
title: QRCode
---

# QRCode

`QRCode` is the qr-code generator.

```jsx
<QRCode mode="image" value="Hello RUI!" />
```

## Example

Basic usage of QRCode component.

```jsx live=local
import React, { useRef, useState } from "react";
import { QRCode } from "rui-next";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  input[type="text"] {
    margin: 15px 0;
    width: 100%;
    height: 24px;
    border: 1px solid #000;
  }
`;

// Example FC
const Example = () => {
  const [content, setContent] = useState("");
  const [mode, setMode] = useState("image");
  const [wrapper, setWrapper] = useState(false);
  const selectModeRef = useRef();
  const selectWrapperRef = useRef();

  const handleInputContent = (e) => setContent(e.target.value.trim());
  const handleSelectMode = () => setMode(selectModeRef.current!.value);
  const handleSelectWrapper = () => setWrapper(selectWrapperRef.current!.value === "1");

  return (
    <ExampleContainer>
      <h1>RUI.next</h1>
      <h3>scan the QR code to access the examples on mobile/tablet device:</h3>
      <br />
      <QRCode
        value="https://nikoni.top/rui-next/docs/"
        border
      />
      <br />
      <br />
      <br />
      <h4>Simple qr-code generator</h4>
      <br />
      Mode:<select
          ref={selectModeRef}
          onChange={() => handleSelectMode()}
        >
        <option value="image">Image</option>
        <option value="svg">SVG</option>
        <option value="table">Table</option>
        <option value="dataurl">DataURL</option>
      </select>
      <br />
      <br />
      Wrapper:<select
          ref={selectWrapperRef}
          onChange={() => handleSelectWrapper()}
        >
        <option value="0">Without Border</option>
        <option value="1">With Border</option>
      </select>
      <input
        type="text"
        placeholder="Please input content"
        onChange={(e) => handleInputContent(e)}
      />
      {content && (<QRCode
        mode={mode}
        value={content}
        border={wrapper}
      />)}
    </ExampleContainer>
  )
};

export default Example;
```

## API

### QRCode

Properties | Descrition | Type | Default
-----------|------------|------|--------
| value | the value of qr-code, mandatory | string | |
| num | the type number, optional | number | 8 |
| level | the error Correction Level, optional value: `L`, `M`, `Q`, `H` | string | `L` |
| mode | the render mode of qr-code, optional value: `image`, `svg`, `table`, `dataurl` | string | `image` |
| border | whether to show the border wrapper, optional | boolean | `false` |

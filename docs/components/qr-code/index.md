---
title: QRCode
---

# QRCode

`QRCode` is the React qr-code generator.

```jsx
<QRCode mode="image" value="Hello RUI!" />
```

## Example

Basic usage of QRCode component.

```jsx live=local
import React, { useEffect, useRef, useState } from "react";
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
  const selectModeRef = useRef();
  const selectWrapperRef = useRef();
  const selectTypeNumberRef = useRef();
  const selectLevelRef = useRef();
  const [params, setParams] = useState({
    value: "",
    num: 8,
    level: "L",
    mode: "image",
    border: false,
  });

  const handleInputContent = (e) => {
    let val = e.target.value.trim();
    let limitLen = params.num * 18;
    if (params.num === 2) {
      limitLen -= 4;
    }
    if (e.target.value.length >= limitLen) {
      val = e.target.value.substring(0, limitLen - 1);
    }
    setParams({...params, value: val});
  };

  const handleSelectTypeNumber = () => setParams({...params, num: parseInt(selectTypeNumberRef.current!.value, 10)});

  const handleSelectLevel = () => setParams({...params, level: selectLevelRef.current!.value});

  const handleSelectMode = () => setParams({...params, mode: selectModeRef.current!.value});

  const handleSelectWrapper = () => setParams({...params, border: selectWrapperRef.current!.value === "1"});

  return (
    <ExampleContainer>
      <h1>RUI.next</h1>
      <h3>Please scan the QR code to access the examples on mobile/tablet device:</h3>
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
      TypeNumber:<select
          ref={selectTypeNumberRef}
          value={params.num}
          onChange={() => handleSelectTypeNumber()}
        >
        {new Array(40).fill("").map((item, i) => (
          <option
            key={`num${i}`}
            value={i + 1}
          >
            {i + 1}
          </option>
        ))}        
      </select>
      <br />
      <br />
      ErrorCorrectionLevel:<select
          ref={selectLevelRef}
          onChange={() => handleSelectLevel()}
        >
        <option value="L">L (7%)</option>
        <option value="M">M (15%)</option>
        <option value="Q">Q (25%)</option>
        <option value="H">H (30%)</option>
      </select>
      <br />
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
      <br />
      <input
        type="text"
        placeholder="Please input content"
        value={params.value}
        onChange={(e) => handleInputContent(e)}
      />
      {params.value && (<QRCode
        value={params.value}
        num={params.num}
        level={params.level}
        mode={params.mode}
        border={params.border}
      />)}
    </ExampleContainer>
  )
};

export default Example;
```

## API

### QRCode

Properties | Description | Type | Default
-----------|------------|------|--------
| value | the value of qr-code, mandatory | string | - |
| num | the type number, optional | number | 8 |
| level | the error Correction Level, optional value: `L`, `M`, `Q`, `H` | string | `L` |
| mode | the render mode of qr-code, optional value: `image`, `svg`, `table`, `dataurl` | string | `image` |
| border | whether to show the border wrapper, optional | boolean | `false` |

---
title: QRCode
---

# QRCode

`QRCode` is the qr-code generator.

```jsx
<QRCode value="Hello RUI!" />
```

## Example

Basic usage of QRCode component.

```jsx live=local
import React, { useState } from "react";
import { QRCode } from "rui-next";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  .qr-code-container {
    display: inline-block;
    border: 1px solid #999;
    border-radius: 5px;
    box-shadow: 3px 3px 6px #CCC;
    overflow: hidden;
  }

  input[type="text"] {
    margin-top: 15px;
    width: 100%;
    height: 24px;
    border: 1px solid #000;
  }
`;

// Example FC
const Example = () => {
  const [content, setContent] = useState("Hello RUI!");
  const onInputContent = (e) => setContent(e.target.value.trim());

  return (
    <ExampleContainer>
      <h1>RUI.next</h1>
      <h3>scan the QR code to access the examples on mobile/tablet device:</h3>
      <br />
      <QRCode
        className="qr-code-container"
        value="https://nikoni.top/rui-next/docs/"
      />
      <br />
      <br />
      <br />
      <h4>Simple qr-code generator</h4>
      <input
        type="text"
        placeholder="Please input content"
        onChange={(e) => onInputContent(e)}
      />
      <QRCode
        value={content}
      />
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
| level | the error Correction Level, optional value: `L` `M` `Q` `H` | string | `L` |

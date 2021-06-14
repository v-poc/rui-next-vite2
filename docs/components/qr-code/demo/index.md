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
import React from "react";
import { QRCode } from "rui-next";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  .qr-code-container {
    display: inline-block;
    border: 1px solid #999;
    border-radius: 0 0 5px 5px;
    box-shadow: 3px 3px 6px #CCC;
  }
`;

// Example FC
const Example = () => (
  <ExampleContainer>
    <h1>VUI.next</h1>
    <h3>scan the QR code to access the examples on mobile/tablet device:</h3>
    <br />
    <QRCode
      className="qr-code-container"
      value="https://nikoni.top/vui-vc-next/"
    />
  </ExampleContainer>
);

export default Example;
```

## API

### QRCode

Properties | Descrition | Type | Default
-----------|------------|------|--------
| value | the value of qr-code, mandatory | string | "" |
| num | the type number, optional | number | 8 |
| level | the error Correction Level, optional value: `L` `M` `Q` `H` | string | `L` |

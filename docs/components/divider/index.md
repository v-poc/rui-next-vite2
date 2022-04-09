---
title: Divider
---

# Divider

`Divider` line, generally used to separate different content.

```jsx
<Divider />
```

## Example

Basic usage of Divider component.

```jsx live=local
import React from "react";
import { Divider } from "rui-next";

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
    <p className="sub-title">Basic Divider with pure line (horizontal mode)</p>
    <Divider />
    <p className="sub-title">Basic Divider (vertical mode)</p>
    <>
      one
      <Divider vertical />
      two
      <Divider vertical />
      three
      <Divider vertical />
      four
    </>
    <p className="sub-title">Divider with content</p>
    <Divider>center content</Divider>
    <br /><br />
    <Divider
      contentAlign="left"
    >
      left content
    </Divider>
    <br /><br />
    <Divider
      contentAlign="right"
    >
      right content
    </Divider>
    <p className="sub-title">Divider with customized styles</p>
    <Divider
      style={{
        color: "orange",
        borderColor: "#36C",
        borderStyle: "dashed",
      }}
    >
      some content
    </Divider>
  </ExampleContainer>
);

export default Example;
```

## API

### Divider

Properties | Description | Type | Default
-----------|------------|------|--------
| contentAlign | The alignment of content | `center`\|`left`\|`right` | `center` |
| style | The custom style | `CSSProperties` | - |
| vertical | Whether the direction mode is vertical | `boolean` | `false` |

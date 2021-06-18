---
title: Badge
---

# Badge

`Badge` is the section at corner for notification.

```jsx
<Badge text="NEW" hot />
```

## Example

Basic usage of Badge component.

```jsx live=local
import React from "react";
import { Badge } from "rui-next";

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

  .dot-section {
    width: 26px;
    height: 26px;
    background: #DDD;
    display: inline-block;
  }

  .mr {
    margin-left: 12px;
  }

  .corner-section {
    width: 80px;
    height: 45px;
  }

  .bg-section {
    margin-left: 12px;
    padding: 0 3px;
    background-color: #21B68A;
    border-radius: 2px;

    sup {
      background: transparent;
    }
  }

  .plain-section {
    margin-left: 12px;
    padding: 0 3px;
    background-color: #FFF;
    border-radius: 2px;
    color: #F19736;
    border: 1px solid #F19736;

    sup {
      background: transparent;
      color: #F19736;
    }    
  }
`;

// Example FC
const Example = () => (
  <ExampleContainer>
    <p className="sub-title">Dot badge</p>
    <Badge dot>
      <span className="dot-section" />
    </Badge>
    <p className="sub-title">Numberic badge</p>
    <Badge
      text={99}
      overflowCount={66}
    />
    <p className="sub-title">Corner badge</p>
    <Badge
      text="HOT"
      className="corner-section"
      corner
    />
    <p className="sub-title">Marketing badge</p>
    <Badge
      text="HOT"
      className="mr"
      hot
    />
    <p className="sub-title">Customize badge</p>
    <Badge
      text="NEW"
      className="bg-section"
    />
    <Badge
      text="Promotion"
      className="plain-section"
    />
  </ExampleContainer>
);

export default Example;
```

## API

### Badge

Properties | Descrition | Type | Default
-----------|------------|------|--------
| size | the size of badge, optional: `large`, `small` | string | `small` |
| text | the text or number inside badge | string\|number | - |
| corner | whether the badge is at the corner position | boolean | `false` |
| dot | show badge as a red dot | boolean | `false` |
| overflowCount | the max count to show | number | `99` |
| hot | the hot commercial style | boolean | `false` |

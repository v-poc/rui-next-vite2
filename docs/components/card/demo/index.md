---
title: Card
---

# Card

`Card` could be used to organize information and operations as an entry for detailed information.

```jsx
<Card>
  <Card.Header
    title="Default Card"
    extra={<span>extra header</span>}
  />
  <Card.Body>
    <div>This is content of `Default Card`</div>
  </Card.Body>
  <Card.Footer
    content="footer content"
    extra={<div>extra footer content</div>}
  />
</Card>
```

## Example

Basic usage of Card component.

```jsx live=local
import React from "react";
import { Card, OnePiece } from "rui-next";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  .default-card {
    margin: 0 2rem;
  }

  .full-card {
    background-color: rgba(0, 0, 0, .02);
    border: 1px solid #EEE;
  }
`;

// Example FC
const Example = () => {
  const defaultImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAACXBIWXMAAAsSAAALEgHS3X78AAABDklEQVR4nGP4dfz4OyOj12xsrxgY8KBbfBKB7U88+z4QRL4TP+Yu+Xz92R+GdwYG+A2FoKesHFmF+4kxGoKyF39meMXKSozRrxgYukN6iTfaZ8IHogyFoP1qjsQb7dlHitFP2Dh9u17SxOhXDAz5uTtoZfRU73paGb1Dx9uz7/2o0RQZ/R8bgJsI5yIbDRFEZiMDAkbDTSdoNFYRdHdhunTQG012WJNmNFYfUBogNHE11oCmidGYInCjMc0lOYVgtQ+Xe9Fkh3QZMvBGz3UuItJcko2uSF1FE6NfMjIFtT0mxWiimzinZAyIN9dnwgdiG2avGBime1YTb3T24s8MRDYnnzGzFuRsI8ZQeHMSAOD2kiUX84lOAAAAAElFTkSuQmCC";

  return (
    <ExampleContainer>
      <Card className="default-card">
        <Card.Header
          title="Default Card"
          thumb={defaultImage}
          extra={<span>extra header</span>}
        />
        <Card.Body>
          <OnePiece scale={0.7} />
        </Card.Body>
        <Card.Footer
          content="footer content"
          extra={<div>extra footer content</div>}
        />
      </Card>
      <br />
      <br />
      <p>Full-width Card example</p>
      <br />
      <Card
        className="full-card"
        full
      >
        <Card.Header
          title="Full width Card"
          thumb={defaultImage}
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>This is content of `Full width Card`</div>
        </Card.Body>
        <Card.Footer
          content="footer content"
          extra={<div>extra footer</div>}
        />
      </Card>
    </ExampleContainer>
  );
};

export default Example;
```

## API

### Card

Properties | Descrition | Type | Default
-----------|------------|------|--------
| full | whether is full width | boolean | `false` |

### Card.Header

Properties | Descrition | Type | Default
-----------|------------|------|--------
| title | title for `Card.Header` | React.Element/String | |
| thumb | thumb to render in the left of  `Card.Header`  | React.Element/String | |
| thumbStyle | style of thumb | Object | {} |
| extra | extra content to render in the right of `Card.Header` | React.Element/String | |

### Card.Body

Properties | Descrition | Type | Default
-----------|------------|------|--------
| - | - | - | - |

### Card.Footer

Properties | Descrition | Type | Default
-----------|------------|------|--------
| content | content of `Card.Footer` | React.Element/String | |
| extra | extra content of `Card.Footer` | React.Element/String | |

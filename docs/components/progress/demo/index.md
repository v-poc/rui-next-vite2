---
title: Progress
---

# Progress

`Progress` Bar indicates the task's progress.

```jsx
<Progress percent={20} position="normal" />
```

## Example

Basic usage of Progress component.

> position `fixed` is at the very top positon just like [`nprogress`](https://www.npmjs.com/package/nprogress).

```jsx live=local
import React, { useState } from "react";
import { Progress } from "rui-next";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  .show-info {
    margin-top: 18px;
    display: flex;
    align-items: center;
    
    .progress {
      margin-right: 5px;
      width: 100%;
    }
  }
`;

// Example FC
const Example = () => {
  const [percent, setPercent] = useState(50);

  // add percent
  const add = () => {
    let p = percent + 10;
    p = percent >= 100 ? 0 : p;
    setPercent(p);
  };

  return (
    <ExampleContainer>
        <Progress
          percent={30}
          position="fixed"
        />
        <br />
        <br />
        <Progress
          percent={40}
          position="normal"
          unfilled={false}
          appearTransition
        />
        <div className="show-info">
          <div className="progress">
            <Progress
              percent={percent}
              position="normal"
            />
          </div>
          <div aria-hidden="true">{percent}%</div>
        </div>
        <br />
        <br />
        <button onClick={() => add()}>Test add percent</button>
    </ExampleContainer>
  );
};

export default Example;
```

## API

### Progress

Properties | Descrition | Type | Default
-----------|------------|------|--------
| percent | percent value of progress | number | 0 |
| position | position of progress bar, optional：`fixed` `normal` | string | `fixed` |
| unfilled | whether to fill unfinished part of progress | boolean | true |
| style | the style of container | object | {} |
| barStyle | the style of bar | object | {} |

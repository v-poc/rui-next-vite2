---
title: useFullscreen
---

# useFullscreen

A Hook that is able to set dom element to be full-screen.

```ts
const [isFullscreen, { setFull, exitFull, toggleFull }] = useFullScreen(target, options?:Options);
```

## Example

Basic usage of useFullscreen hook.

```jsx live=local
import React, { useRef } from "react";
import { useFullscreen, Button } from "rui-next";

// Log info
const logInfo = (content: any, type: string = 'info'): void => {
  console[type] &&
    console[type]('[RUI-log] %c%s', 'background: #69C;color: #FFF', content);
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

  img {
    width: 20%;
  }
`;

// Example FC
const Example = () => {
  const rootRef = useRef();
  const imgRef = useRef();

  const [isFullscreen, { setFull, exitFull, toggleFull }] = useFullscreen(
    rootRef,
    {
      onExitFull: () => logInfo('onExitFull'),
      onFull: () => logInfo('onFull'),
    },
  );

  const [, { setFull: setFullImage }] = useFullscreen(
    imgRef,
    {
      onExitFull: () => logInfo('image-onExitFull'),
      onFull: () => logInfo('image-onFull'),
    },
  );

  return (
    <ExampleContainer>
      <p className="sub-title">Default usage</p>
      <div ref={rootRef}>
        <div style={{ color: isFullscreen ? 'white' : 'black' }}>
          Fullscreen state: {isFullscreen ? 'Fullscreen' : 'Not Fullscreen'}
        </div>
        <br />
        <Button
          type="primary"
          inline
          size="small"
          onClick={setFull}
        >
          Click to setFull
        </Button><br /><br />
        <Button
          type="primary"
          inline
          size="small"
          onClick={exitFull}
        >
          Click to exitFull
        </Button><br /><br />
        <Button
          type="primary"
          inline
          size="small"
          onClick={toggleFull}
        >
          Click to toggleFull
        </Button>
      </div>
      <p className="sub-title">Image full-screen usage</p>
      <div>
        <img
          ref={imgRef}
          src="https://vitejs.dev/logo.svg"
        />
        <br /><br />
        <Button
          type="primary"
          inline
          size="small"
          onClick={setFullImage}
        >
          Click to setFull image
        </Button>
      </div>
    </ExampleContainer>
  );
};

export default Example;
```

## API

### useFullscreen - Params

| Property | Description               | Type                                                             | Default |
| -------- | ------------------------- | ---------------------------------------------------------------- | ------- |
| target   | DOM element or Ref Object | `HTMLElement` \| `() => HTMLElement` \| `React.MutableRefObject` | -       |
| options  | setting(optional)         | `Options`                                                        | -       |

### useFullscreen - Options

| Property   | Description                        | Type         | Default |
| ---------- | ---------------------------------- | ------------ | ------- |
| onExitFull | listen for exit full screen events | `() => void` | -       |
| onFull     | listen for full screen events      | `() => void` | -       |

### useFullscreen - Result

| Property     | Description        | Type         |
| ------------ | ------------------ | ------------ |
| isFullscreen | is full screen     | `boolean`    |
| setFull      | set full screen    | `() => void` |
| exitFull     | exit full screen   | `() => void` |
| toggleFull   | toggle full screen | `() => void` |

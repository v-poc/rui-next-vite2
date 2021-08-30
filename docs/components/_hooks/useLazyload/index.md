---
title: useLazyload
---

# useLazyload

A hook that can lazy load resources such as image/video/audio/iframe/backgroundImage.

```ts
const [callbackRef, isLoaded] = useLazyload();
```

## Example

Basic usage of useLazyload hook.

```jsx live=local
import React, { useRef, useState } from "react";
import { ActivityIndicator, useLazyload } from "rui-next";

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

  button {
    user-select: none;
  }
`;

// Example FC
const Example = () => {
  const [callbackRef, isLoaded] = useLazyload();

  return (
    <ExampleContainer>
      <p className="sub-title">Image isLoaded: {isLoaded ? "Yes" : "Not yet"}</p>
      {!isLoaded && (
        <ActivityIndicator
          text="Loading..."
        />
      )}
      <img
        ref={callbackRef}
        data-src="https://nikoni.top/images/niko-mit-react.png"
      />
    </ExampleContainer>
  );
};

export default Example;
```

## API

### useLazyload - Result

| Property | Description                                 | Type                   | Default |
|----------|---------------------------------------------|------------------------|---------|
| callbackRef | The callback function for Ref | `(el: HTMLElement | null) => void` | - |
| isLoaded | Whether the resource is loaded | `boolean` | `false` |

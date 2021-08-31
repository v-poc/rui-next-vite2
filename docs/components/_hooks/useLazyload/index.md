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
import React, { useState } from "react";
import { Button, Skeleton, useLazyload } from "rui-next";

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
  const [showContent, setShowContent] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);
  const [callbackRef, isLoaded] = useLazyload();

  const startContentLoading = () => {
    setShowContent(true);
    setContentLoading(true);

    setTimeout(() => {
      setContentLoading(false);
    }, 2000);
  };

  return (
    <ExampleContainer>
      <p className="sub-title">Skeleton Content loading image</p>
      <Button
        type="primary"
        size="small"
        inline
        round
        disabled={contentLoading}
        onClick={startContentLoading}
      >
        Test Content loading (delay 2s)
      </Button>
      {showContent && (
        <Skeleton
          title
          titleWidth="80%"
          row={4}
          loading={contentLoading}
        >
          <img
            ref={callbackRef}
            data-src="https://nikoni.top/images/niko-mit-react.png"
          />
        </Skeleton>
      )}
    </ExampleContainer>
  );
};

export default Example;
```

## API

### useLazyload - Result

| Property | Description                                 | Type                   | Default |
|----------|---------------------------------------------|------------------------|---------|
| callbackRef | The callback function for Ref | `(el: HTMLElement \| null) => void` | - |
| isLoaded | Whether the resource is loaded | `boolean` | `false` |

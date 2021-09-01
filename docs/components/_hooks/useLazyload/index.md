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
`;

// Example FC
const Example = () => {
  const [showContent, setShowContent] = useState(false);
  const [callbackRef, isLoaded] = useLazyload();

  const startContentLoading = () => setShowContent(true);

  return (
    <ExampleContainer>
      <p className="sub-title">Skeleton Content loading image</p>
      <Button
        type="primary"
        size="small"
        inline
        round
        disabled={showContent && !isLoaded}
        onClick={startContentLoading}
      >
        Test Content loading
      </Button>
      {showContent && (<>
        <Skeleton
          title
          titleWidth="80%"
          row={4}
          loading={!isLoaded}
        />
        <img
          ref={callbackRef}
          data-src="https://vitejs.dev/logo.svg"
        />
      </>)}
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

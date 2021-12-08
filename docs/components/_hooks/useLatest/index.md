# useLatest

A hook that returns the latest value, that could avoid the **closure problem**.

## Example

```jsx live=local
import React, { useRef, useState } from "react";
import { useLatest, Button } from "rui-next";

export default () => {
  const [isStart, setIsStart] = useState(false);
  const [count, setCount] = useState(0);
  const [refCount, setRefCount] = useState(0);
  const countRef = useLatest(refCount);
  const timerRef = useRef();

  const handleClick = () => {
    if (!isStart) {
      timerRef.current = setInterval(() => {
        setCount(count + 1);
        setRefCount(countRef.current + 1);
      }, 1000);
      setIsStart(true);
    } else {
      clearInterval(timerRef.current);
      setCount(0);
      setRefCount(0);
      setIsStart(false);
    }
  };

  return (<>
    Count by useState: {count}<br /><br />
    Count by useLatest: {refCount}<br /><br />
    <Button
      type="primary"
      size="small"
      inline
      round
      onClick={handleClick}
    >
      {isStart ? "Stop" : "Start"} testing
    </Button>
  </>);
};
```

## API

```typescript
const latestValueRef = useLatest<T>(value: T): MutableRefObject<T>;
```

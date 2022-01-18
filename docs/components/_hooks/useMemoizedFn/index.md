# useMemoizedFn

A hook that is able to persist functions. In theory, `useMemoizedFn` can be used to replace `useCallback`.

In some scenarios, we need to use `useCallback` to cache a function, but when deps (the second parameter) changes, the function will be regenerated, causing the function reference to change.

```typescript
// usage
const fn = useMemoizedFn<T>(fn: T): T;
```

```js
const [count1, setCount1] = useState("");

// func function reference will change once count is changed
const func = useCallback(() => {
  console.log(count1);
}, [count1]);
```

By using `useMemoizedFn`, you can omit the second parameter deps, and ensure that the function reference never change.

```js
const [count2, setCount2] = useState("");

// func function reference will never change
const func = useMemoizedFn(() => {
  console.log(count2);
});
```

## Examples

### Basic usage

#### Performance Improvement - useMemoizedFn can be used to optimize performance

```jsx live=local
import React, { useCallback, useRef, useState } from "react";
import { useMemoizedFn, Button, Divider } from "rui-next";

type SubCompType = {
  logCount: () => void;
};

// SubComponent
const SubComp = React.memo<SubCompType>((props) => {
  const { logCount } = props;
  const countRenderRef = useRef(0);
  countRenderRef.current++;

  return (<>
    <p>Current SubComponent - renderCount: <strong>{countRenderRef.current}</strong></p>
    <br />
    <Button
      type="default"
      size="small"
      inline
      onClick={logCount}
    >
      Click to show the count of ParentComponent
    </Button>
  </>);
});

// ParentComponent
const Example = () => {
  const [count, setCount] = useState(0); // the count of ParentComponent

  const callbackFn = useCallback(() => {
    console.log(`useCallback - current count is ${count}`);
  }, [count]);

  const memoizedFn = useMemoizedFn(() => {
    console.log(`useMemoizedFn - current count is ${count}`);
  });
  
  return (<>
    <p>Current ParentComponent - count: {count}</p>
    <br />
    <Button
      type="primary"
      size="small"
      inline
      onClick={() => setCount((c) => c + 1)}
    >
      Click to view the <strong>re-render</strong> of SubComponent
    </Button>
    <br /><br />
    <Divider>Pass prop to SubComponent by <strong>useCallback</strong></Divider>
    <SubComp logCount={callbackFn} />
    <br /><br />
    <Divider>Pass prop to SubComponent by <strong>useMemoizedFn</strong></Divider>
    <SubComp logCount={memoizedFn} />
  </>);
};
export default Example;
```

## API

### Params

| Property | Description                       | Type                      | Default |
|----------|-----------------------------------|---------------------------|---------|
| fn       | Function that require persistence | `(...args: any[]) => any` | -       |

### Result

| Property | Description                            | Type                      |
|----------|----------------------------------------|---------------------------|
| fn       | Function (the reference address never changes) | `(...args: any[]) => any` |

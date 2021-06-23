---
title: usePersistFn
---

# usePersistFn

Hooks for persistent functions.

```ts
type noop = (...args: any[]) => any;

usePersistFn<T extends noop>(fn: T);
```

## API

### usePersistFn - Params

| Property | Description                        | Type                      | Default |
| -------- | ---------------------------------- | ------------------------- | ------- |
| fn       | Function that requires persistence | `(...args: any[]) => any` | -       |

### usePersistFn - Result

| Property | Description                                       | Type                      |
| -------- | ------------------------------------------------- | ------------------------- |
| fnResult | Function with the reference address never changes | `(...args: any[]) => any` |

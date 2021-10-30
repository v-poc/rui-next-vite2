---
title: useNetwork
---

# useNetwork

A hook that can manage the state of network.

```ts
type NetworkState = {
  online?: boolean;
  since?: Date;
  rtt?: number;
  type?: string;
  downlink?: number;
  saveData?: boolean;
  downlinkMax?: number;
  effectiveType?: string;
};

const result: NetworkState = useNetwork();
```

## Example

Basic usage of useNetwork hook.

```jsx live=local
import React from "react";
import { useNetwork, Result, Icon } from "rui-next";

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
  const networkState = useNetwork();
  const isOnline = networkState.online;

  const imgEl = isOnline
    ? <Icon type="check-circle" size="lg" color="green" />
    : <Icon type="exclamation-circle" size="lg" color="red" />;

  return (
    <ExampleContainer>
      <Result
        img={imgEl}
        title="Network state"
        message={`Detect current state: ${isOnline ? "online" : "offline"}`}
      />
    </ExampleContainer>
  );
};

export default Example;
```

## API

### useNetwork - Result

| Property      | Description                                                               | Type                                                                                           |
| ------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| online        | Effective online                                                          | `boolean`                                                                                      |
| since         | Online/offline last change date                                           | `Date`                                                                                         |
| rtt           | Round-trip time                                                           | `number`                                                                                       |
| type          | Type of connection that a device is using to communicate with the network | `bluetooth` \| `cellular` \| `ethernet` \| `none` \| `wifi` \| `wimax` \| `other` \| `unknown` |
| downlink      | Effective bandwidth estimate in megabits per second                       | `number`                                                                                       |
| downlinkMax   | The maximum downlink speed                                                | `number`                                                                                       |
| saveData      | Whether the user agent has set the option to reduce data usage            | `boolean`                                                                                      |
| effectiveType | The effective type of the connection                                      | `slow-2g` \| `2g` \| `3g` \| `4g`                                                              |

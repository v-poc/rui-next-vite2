---
title: SearchBar
---

# SearchBar

`SearchBar` usually locates above the app content area and provides search capabilities.

```jsx
<SearchBar placeholder="please input content" />
```

## Example

Basic usage of SearchBar component.

```jsx live=local
import React, { useRef } from "react";
import { Button, SearchBar } from "rui-next";
import { logInfo } from "experimental";

const handleLog = (name, v) => {
  logInfo(`[${name}] info: ${v}`);
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

  .btn-wrapper {
    margin-top: 10px;
    margin-right: 10px;
  }
`;

// Example FC
const Example = () => {
  const searchBarRef = useRef();

  return (
    <ExampleContainer>
      <p className="sub-title">Basic SearchBar with cancel button</p>
      <SearchBar
        placeholder="Please input content"
        showCancel
      />
      <p className="sub-title">Basic SearchBar without cancel button</p>
      <SearchBar
        placeholder="Please input content"
      />
      <p className="sub-title">SearchBar always with cancel button</p>
      <SearchBar
        placeholder="Please input content"
        showCancel={() => true}
      />
      <p className="sub-title">SearchBar with events (refer `RUI-log` in Console log)</p>
      <SearchBar
        ref={searchBarRef}
        placeholder="Please input content"
        showCancel
        onBlur={() => handleLog("onBlur", "Lose focus")}
        onCancel={() => handleLog("onCancel", "Cancel search")}
        onClear={() => handleLog("onClear", "Clear content")}
        onFocus={() => handleLog("onFocus", "Get focus")}
        onSearch={(v) => handleLog("onSearch", `Search content: ${v}`)}
      />
      <Button
        type="primary"
        className="btn-wrapper"
        inline
        round
        size="small"
        onClick={() => searchBarRef.current.focus()}
      >
        Test to get focus
      </Button>
      <Button
        type="primary"
        className="btn-wrapper"
        inline
        round
        size="small"
        onClick={() => searchBarRef.current.clear()}
      >
        Test to clear content
      </Button>
    </ExampleContainer>
  );
}

export default Example;
```

## API

### SearchBar

Properties | Description | Type | Default
-----------|-------------|------|--------
| value | The input value | `string` | - |
| placeholder | The placeholder text | `string` | - |
| maxLength | The maximum number of characters the user can input | `number` | - |
| clearable | Whether to enable the clear icon, the input would be cleared after the clear icon is clicked | `boolean` | `true` |
| showCancel | Whether to display the cancel button on the right side of the search input | `boolean \| ((focus: boolean, val: string) => boolean)` | `false` |
| cancelText | The text of the cancel button | `string` | `'cancel'` |
| icon | The icon node | `ReactNode` | `<Icon type="search" />` |
| clearOnCancel | Whether to clear the input after the cancel button is clicked | `boolean` | `true` |
| onSearch | Triggered when the enter key is input | `(val: string) => void` | - |
| onChange | Triggered when the input content is changed | `(value: string) => void` | - |
| onFocus | Triggered when the input get focus | `(e: React.FocusEvent<HTMLInputElement>) => void` | - |
| onBlur | Triggered when the input lose focus | `(e: React.FocusEvent<HTMLInputElement>) => void` | - |
| onClear | Triggered when the clear button is clicked | `() => void` | - |
| onCancel | Triggered when the cancel button is clicked | `() => void` | - |

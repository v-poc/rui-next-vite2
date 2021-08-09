---
title: Tag
---

# Tag

`Tag` is the section for categorizing or markuping. There are two kinds of `Tag`, selectable and readonly type, the latter is a smaller tag without interactive behavior, which is typically used for display content.

```jsx
<Tag>display content</Tag>
```

## Example

Basic usage of Tag component.

```jsx live=local
import React from "react";
import { Tag } from "rui-next";

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
`;

// Example FC
const Example = () => {
  const handleChange = (selected) => {
    logInfo(`Tag selected state: ${selected}`);
  };

  return (
    <ExampleContainer>
      <p className="sub-title">Tag with `data-seed` attr (Selectable type)</p>
      <Tag data-seed="seedId">DataSeed</Tag>
      <p className="sub-title">Selected tag (Selectable type)</p>
      <Tag selected>Selected</Tag>
      <p className="sub-title">Disabled tag</p>
      <Tag disabled>Disabled</Tag>
      <p className="sub-title">Tag with Callback function (`RUI-log` in Console log)</p>
      <Tag onChange={handleChange}>Callback</Tag>
      <p className="sub-title">Closable tag with Callback function (`RUI-log` in Console log)</p>
      <Tag
        closable
        onClose={() => logInfo("onClose")}
        afterClose={() => logInfo("afterClose")}
      >Closable</Tag>
      <p className="sub-title">Small tag (Readonly type)</p>
      <Tag small>Small size</Tag>
    </ExampleContainer>
  )
};

export default Example;
```

## API

### Tag

Properties | Description | Type | Default
-----------|------------|------|--------
| small | Whether to show a smaller size. | Boolean | `false` |
| disabled | Whether is disabled. | Boolean | `false` |
| closable | Whether this tag could be closed (invalid in `small` or `disabled` mode) | Boolean | `false` |
| selected | Whether is selected by default. | Boolean | `false` |
| onChange | The callback function that is triggered when the selected state changes. | (selected: bool) => void | - |
| onClose | The callback function that is triggered when the tag is closed. | () => void | - |
| afterClose | The callback function that is triggered after close. | () => void | - |

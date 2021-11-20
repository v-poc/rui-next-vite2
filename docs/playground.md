---
title: Playground
---

# Playground

This is the playground for `RUI.next` (**experimental status**).

```jsx live=local
import React from "react";
import {
  Divider,
  Flex,
  NoticeBar,
  Icon,
  QRCode,
  Watermark,
} from "rui-next";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  .mr {
    margin-right: 10px;
  }

  .watermark-wrapper {
    position: relative;
    width: 100%;
    height: 300px;
    border: 1px dashed #DDD;

    .r-watermark {
      position: absolute;
    }
  }
`;

// Example FC
const Example = () => {
  const handleBtnClick = () => {
    location.href = "https://nikoni.top/rui-next/docs/";
  };

  return (
    <ExampleContainer>
      <div className="watermark-wrapper">
        <Watermark content="RUI next" />
        <NoticeBar
          type="alert"
          content="This is the playground for RUI.next. Please scan the QR code to access the examples on mobile/tablet device."
          extra={
            <Icon
              type="ellipsis"
              className="mr"
              onClick={() => handleBtnClick()}
            />
          }
          closeable
        />
        <Divider contentAlign="left">QR Code</Divider>
        <Flex justify="center">
          <QRCode
            value="https://nikoni.top/rui-next/docs/"
            border
          />
        </Flex>
        <Divider contentAlign="right">RUI Playground</Divider>
      </div>
    </ExampleContainer>
  );
};

export default Example;
```

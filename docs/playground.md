---
title: Playground
---

# Playground

This is the playground for `RUI.next` (**experimental status**).

> This is a lightweight demo ([rui-poc](https://github.com/v-poc/rui-poc) | [online](https://nikoni.top/rui-poc) | [electron-rui-poc](https://github.com/v-poc/vite-electron-rui-poc)) to use `react-ts` template of [@vite/create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite).

```jsx live=local
import React, { useState } from "react";
import {
  Divider,
  Empty,
  Flex,
  NoticeBar,
  Icon,
  Input,
  QRCode,
  Watermark,
  Button,
  Progress,
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
    min-height: 600px;
    border: 1px dashed #DDD;

    .r-watermark {
      position: absolute;
    }
  }

  .todo-list-wrapper {
    padding: 10px;

    .main-hd {
      .header {
        display: flex;
        padding: 2px;
        border-radius: 5px;
        border: 1px solid #ccc;

        .r-button {
          padding: 0 8px;

          .r-button-icon {
            margin-right: 0;
          }
        }
      }

      input[type='text'] {
        margin-right: 10px;
        padding-left: 3px;
        width: 100%;
        height: 28px;
        border: 1px solid #CCC;
        border-radius: 4px;
      }

      p.tasks {
        margin-top: 30px;
        padding: 0;      
        width: 160px;
        font-size: 100%;
        color: #4CAF50;
      }    
    }

    .main-bd {
      display: flex;
      justify-content: start;
      align-items: start;

      p {
        margin-top: 20px;
        padding: 0;
      }

      p.remaining {
        margin-right: 60px;
        font-size: 80%;
        color: #36C;
      }

      p.completed {
        font-size: 80%;
        color: #009688;
      }
    }

    .main-ft {
      margin-top: 15px;

      .row {
        margin-bottom: 15px;
        padding-bottom: 15px;
        display: flex;
        justify-content: start;
        align-items: center;
        border-bottom: 1px solid #EFEFEF;

        .content {
          margin-left: 50px;
          color: #000;
          text-decoration: none;
          font-size: 80%;
        }

        .label-done {
          color: #999;
          text-decoration: line-through;
        }
      }
    }

    .row-flex {
      flex: 1;
      display: flex;
      justify-content: flex-end;

      .r-icon {
        margin-right: 20px;
      }
    }  
  }
`;

// TodoList FC
const TodoList = () => {
  const [taskItem, setTaskItem] = useState("");
  const [tasks, setTasks] = useState([
    {
      text: "Foobar",
      done: false,
    },
    {
      text: "Fizzbuzz",
      done: false,
    },
  ]);

  // get completed count
  const getCompletedCount = () => {
    return tasks.filter((item) => item.done).length;
  };

  // get remaining count
  const getRemainingCount = () => {
    return tasks.length - getCompletedCount();
  };

  // create Task
  const createTask = () => {
    if (!taskItem) {
      return;
    }

    const arr = [...tasks];
    arr.push({
      text: taskItem,
      done: false,
    });

    setTaskItem("");
    setTasks(arr);
  };

  // delete task
  const deleteTask = (index) => {
    const arr = [...tasks];
    arr.splice(index, 1);
    setTasks(arr);
  };

  // mark task as completed
  const completeTask = (e, index) => {
    const checkFlag = e && e.target && e.target.checked;
    const arr = [...tasks];
    arr[index].done = checkFlag;
    setTasks(arr);
  };

  // calc task progress percent
  const taskProgress = tasks.length ? Math.round(100 * getCompletedCount() / tasks.length) : 0;

  return (
    <div className="todo-list-wrapper">
      <div className="main-hd">
        <div className="header">
          <Input
            placeholder="What are you working on?"
            value={taskItem}
            onEnterKeyPress={createTask}
            onChange={(v: string) => setTaskItem(v)}
          />
          <Button
            type="primary"
            inline
            round
            size="small"
            icon="plus"
            disabled={!taskItem}
            onClick={createTask}
          ></Button>
        </div>
        <p className="tasks">Tasks: { tasks.length }</p>
      </div>
      <div className="main-bd">
        <p className="remaining">Remaining: { getRemainingCount() }</p>
        <p className="completed">Completed: { getCompletedCount() }</p>
        <div className="row-flex">
          <Progress
            mode="circle"
            percent={taskProgress}
            size={60}
            trackWidth={6}
          >
            {taskProgress}%
          </Progress>
        </div>
      </div>
      {tasks.length > 0 ? (
        <div
          className="main-ft"
        >
          {tasks.map((item, index) => (
            <div
              key={`row${index}`}
              className="row"
            >
              <input
                key={`checkbox${index}`}
                type="checkbox"
                id={`checkbox${index}`}
                checked={item.done}
                onChange={(e) => completeTask(e, index)}
              />
              <label
                key={`label${index}`}
                className={`content${item.done ? " label-done": ""}`}
                htmlFor={`checkbox${index}`}
              >
                { item.text }
              </label>
              <div className="row-flex">
                {item.done && (
                  <Icon
                    key={`checkIcon${index}`}
                    type="check"
                    color="#36C"
                  />
                )}
                <Icon
                  key={`deleteIcon${index}`}
                  type="cross-circle-o"
                  color="#CCC"
                  onClick={() => deleteTask(index)}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Empty
          message="No result"
        />
      )}
    </div>
  );
};

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
              onClick={handleBtnClick}
            />
          }
          closeable
        />
        <Divider contentAlign="center">Todo List with animated progress</Divider>
        <TodoList />
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

---
title: Progress
---

# Progress

`Progress` Bar/Circle indicates the task's progress.

```jsx
<Progress percent={20} position="normal" />
```

## Example

Basic usage of Progress component.

> For `ProgressBar`, position `fixed` is at the very top positon just like [`nprogress`](https://www.npmjs.com/package/nprogress).

```jsx live=local
import React, { useState } from "react";
import { Button, Divider, Empty, Icon, Progress } from "rui-next";

// Example Styles
import styled from "styled-components";

const ExampleContainer = styled.div`
  .show-info {
    margin-top: 18px;
    display: flex;
    align-items: center;
    
    .progress {
      margin-right: 5px;
      width: 100%;
    }
  }

  .sub-title {
    color: #888;
    font-size: 14px;
    padding: 30px 0 18px 0;
  }

  .sub-title:first-child {
    padding-top: 0;
  }

  .todo-list-wrapper {
    .main-hd {
      .header {
        display: flex;

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

  // input task item
  const inputTaskItem = (e) => {
    const val = e && e.target && e.target.value.trim() || "";
    setTaskItem(val);
  };

  // calc task progress percent
  const taskProgress = tasks.length ? Math.round(100 * getCompletedCount() / tasks.length) : 0;

  return (
    <div className="todo-list-wrapper">
      <div className="main-hd">
        <div className="header">
          <input
            type="text"
            placeholder="What are you working on?"
            value={taskItem}
            onKeyDown={(e) => e && e.keyCode === 13 && createTask()}
            onChange={inputTaskItem}
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
  const [percent, setPercent] = useState(50);

  // add percent
  const add = () => {
    let p = percent + 10;
    p = percent >= 100 ? 0 : p;
    setPercent(p);
  };

  return (
    <ExampleContainer>
      <p className="sub-title">Todo List with animated progress</p>
      <TodoList />

      <br />
      <Divider
        style={{
          borderColor: "#36C",
          borderStyle: "dashed",
        }}
      />

      <p className="sub-title">ProgressCircle mode</p>
      <Progress
        mode="circle"
        percent={percent}
        size={80}
        trackWidth={8}
      >
        {percent}%
      </Progress>

      <p className="sub-title">ProgressBar mode</p>
      <Progress
        percent={30}
        position="fixed"
      />
      <br />
      <br />
      <Progress
        percent={40}
        position="normal"
        unfilled={false}
        appearTransition
      />
      <div className="show-info">
        <div className="progress">
          <Progress
            percent={percent}
            position="normal"
          />
        </div>
        <div aria-hidden="true">{percent}%</div>
      </div>
      <br />
      <br />
      <Button
        type="primary"
        size="small"
        inline
        onClick={() => add()}
      >
        Click to add percent
      </Button>
    </ExampleContainer>
  );
};

export default Example;
```

## API

### Progress

Properties | Description | Type | Default
-----------|------------|------|--------
| percent | percent value of progress | `number` | `0` |
| position | position of progress bar, optional: `fixed`, `normal` | `string` | `fixed` |
| unfilled | whether to fill unfinished part of progress | `boolean` | `true` |
| style | the style of container | `Object` | `{}` |
| barStyle | the style of bar | `Object` | `{}` |
| children | the customized information | `React.ReactNode` | - |
| size | the width and height of the canvas of ProgressCircle | `number` | `50px` |
| trackWidth | the width of the track of ProgressCircle | `number` | `3px` |
| mode | the mode of progress, optional: `bar`, `circle` | `string` | `bar` |

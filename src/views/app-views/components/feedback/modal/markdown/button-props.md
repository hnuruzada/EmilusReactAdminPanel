---
order: 11
title:
  zh-CN: 自定义页脚按钮属性
  en-US: Customize footer buttons props
---

## zh-CN

传入 `okButtonProps` 和 `cancelButtonProps` 可分别自定义确定按钮和取消按钮的 props。

## en-US

Passing `okButtonProps` and `cancelButtonProps` will customize the OK button and cancel button props.

```jsx
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
const ButtonProps = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized button props
      </Button>
      <Modal
        title="Basic Modal"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: true,
        }}
        cancelButtonProps={{
          disabled: true,
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default ButtonProps;
```

---
order: 12
title:
  zh-CN: 自定义页签头
  en-US: Customized bar of tab
---

## zh-CN

使用 react-sticky 组件实现吸顶效果。

## en-US

Use react-sticky.

```jsx
import { Tabs } from 'antd';
import React from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        className="site-custom-tab-bar"
        style={{
          ...style,
        }}
      />
    )}
  </Sticky>
);
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: `Tab ${id}`,
    key: id,
    children: `Content of Tab Pane ${id}`,
    style:
      i === 0
        ? {
            height: 200,
          }
        : undefined,
  };
});
const CustomTabBar = () => (
  <StickyContainer>
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />
  </StickyContainer>
);
export default CustomTabBar;
```

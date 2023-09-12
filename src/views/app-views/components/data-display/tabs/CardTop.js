import { Tabs } from 'antd';
import React from 'react';
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: `Tab Title ${id}`,
    key: id,
    children: (
      <>
        <p>Content of Tab Pane {id}</p>
        <p>Content of Tab Pane {id}</p>
        <p>Content of Tab Pane {id}</p>
      </>
    ),
  };
});
const CardTop = () => (
  <div style={{background: "#F5F5F5", padding: "24px"}}>
    <div className="card-container">
      <Tabs type="card" items={items} />
    </div>
  </div>
);
export default CardTop;

import React, { useState } from "react";
import { Timeline, Button } from "antd";

export const Pending = () => {
  const [reverse, setReverse] = useState(false);
  const handleClick = () => {
    setReverse(!reverse);
  };
  return (
    <div>
      <Timeline
        pending="Recording..."
        reverse={reverse}
        items={[
          {
            children: 'Create a services site 2015-09-01',
          },
          {
            children: 'Solve initial network problems 2015-09-01',
          },
          {
            children: 'Technical testing 2015-09-01',
          },
        ]}
      />
      <Button
        type="primary"
        style={{
          marginTop: 16,
        }}
        onClick={handleClick}
      >
        Toggle Reverse
      </Button>
    </div>
  );
}

export default Pending;

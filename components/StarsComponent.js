import {Group, Star} from "react-konva";
import React from "react";

const Stars = () => {
  const starItems = [];

  for (let i = 0; i < 5; i++) {
    starItems.push(
      <Star
        numPoints={5}
        x={30 + 30 * i * 2.1}
        y={30}
        innerRadius={10}
        outerRadius={25}
        fill={"yellow"}
        stroke={"yellow"}
        strokeWidth={4}
        type={'star'}
      />
    );
  }

  return (
    <React.Fragment>
      <Group  draggable={true} name={'testExample'} type={'group_star'}>
        {starItems}
      </Group>
    </React.Fragment>
  );
};

export default Stars;
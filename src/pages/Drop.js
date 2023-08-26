import React from "react";
import { useDrop } from "react-dnd";

const Drop = () => {
  const [{ isOver }, drop] = useDrop({
    accept: "row",
    drop: (item, monitor) => {
      // Handle the drop event here, move the row to the column
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{ backgroundColor: isOver ? "yellow" : "transparent" }}
    >
      {/* Render the column */}
    </div>
  );
};

export default Drop;

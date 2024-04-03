import React from "react";

import { BOARD, KEYS } from "../assets/js/utils";
import Element from "./Element";

export default function Container() {
  const [clicking, setClicking] = React.useState(false);
  const [dragging, setDragging] = React.useState({
    begin: false,
    end: false
  });

  const onMouseDown = e => {
    const ridx = Number(e.target.dataset.ridx);
    const cidx = Number(e.target.dataset.cidx);

    // if (ridx === begin.current.x && cidx === begin.current.y) {
    //   setDragging({ begin: true, end: false });
    // } else if (ridx === end.current.x && cidx === end.current.y) {
    //   setDragging({ begin: false, end: true });
    // } else {
    //   clickPos.current = { x: ridx, y: cidx };
    //   setClicking(true);
    // }
  };
  const onMouseUp = () => {
    setClicking(false);
    // setDragging({ begin: false, end: false });
  };

  return (
    <div
      className="board w-100 w-70-m w-60-l"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      // onMouseMove={onMouseMove}
      // onClick={onClick}
      role="button"
      tabIndex="0"
      style={{
        margin: "auto",
        border: "4px solid black"
      }}
    >
      {BOARD.map((row, ridx) => (
        <div className="board_row" key={ridx}>
          {row.map((col, cidx) => (
            <Element ridx={ridx} cidx={cidx} key={KEYS[ridx][cidx]} />
          ))}
          <br />
        </div>
      ))}
    </div>
  );
}

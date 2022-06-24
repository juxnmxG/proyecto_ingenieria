import React, { useState, useRef, useEffect } from "react";

function DragNDrop({ data, setIsOpen }) {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const [add, setAdd] = useState({title: "", desc: ""});

  useEffect(() => {
    setList(data);
  }, [setList, data]);

  const dragItem = useRef();
  const dragItemNode = useRef();

  const handletDragStart = (e, item) => {
    console.log("Starting to drag", item);

    dragItemNode.current = e.target;
    dragItemNode.current.addEventListener("dragend", handleDragEnd);
    dragItem.current = item;

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };
  const handleDragEnter = (e, targetItem) => {
    console.log("Entering a drag target", targetItem);
    if (dragItemNode.current !== e.target) {
      console.log("Target is NOT the same as dragged item");
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[targetItem.grpI].items.splice(
          targetItem.itemI,
          0,
          newList[dragItem.current.grpI].items.splice(
            dragItem.current.itemI,
            1
          )[0]
        );
        dragItem.current = targetItem;
        localStorage.setItem("List", JSON.stringify(newList));
        return newList;
      });
    }
  };
  const handleAddTaks = (e, targetItem) => {};
  const handleDragEnd = (e) => {
    setDragging(false);
    dragItem.current = null;
    dragItemNode.current.removeEventListener("dragend", handleDragEnd);
    dragItemNode.current = null;
  };
  const getStyles = (item) => {
    if (
      dragItem.current.grpI === item.grpI &&
      dragItem.current.itemI === item.itemI
    ) {
      return "dnd-item current";
    }
    return "dnd-item";
  };

  if (list) {
    return (
      <div className="drag-n-drop">
        {list.map((grp, grpI) => (
          <div
            key={grp.title}
            id={grpI}
            onDragEnter={
              dragging && !grp.items.length
                ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                : null
            }
            className="dnd-group"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>{grp.title}</h1>
              <button style={{ height: "40px" }} onClick={()=>setIsOpen(true)}>+</button>
            </div>
            {grp.items.map((item, itemI) => (
              <div
                draggable
                key={item.title}
                onDragStart={(e) => handletDragStart(e, { grpI, itemI })}
                onDragEnter={
                  dragging
                    ? (e) => {
                        handleDragEnter(e, { grpI, itemI });
                      }
                    : null
                }
                className={dragging ? getStyles({ grpI, itemI }) : "dnd-item"}
              >
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default DragNDrop;

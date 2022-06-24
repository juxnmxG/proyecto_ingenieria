import React, { useState } from "react";
import DragNDropBacklog from "../Components/DragAndDrog/DragNDropBacklog";

function ViewProductBacklog() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataItem, setDataItem] = useState({ title: "", desc: "" });

  const handleOnChange = (e) => {
    setDataItem({
      ...dataItem,
      [e.target.name]: e.target.value,
    });
    console.log(dataItem);
  };
  return (
    <div>
      {isOpen && (
        <div className="light-box">
          <div className="popup">
            <form>
              <input
                name="title"
                placeholder="Titulo"
                onChange={handleOnChange}
              ></input>
              <textarea
                name="desc"
                placeholder="Descripcion"
                onChange={handleOnChange}
              />
              <button>Agregar</button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                }}
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
      <DragNDropBacklog setIsOpen={setIsOpen}></DragNDropBacklog>
    </div>
  );
}

export default ViewProductBacklog;

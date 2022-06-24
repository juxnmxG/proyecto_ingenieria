import { useEffect, useState } from "react";
import "./DragList.css";
import DragNDrop from "./DragNDrop";

const defaultData = [
  {title: 'group 1', items: [{title: "title 1", desc: "lorem ipsum"}, {title: "title 2", desc: "lorem ipsum"}, {title: "title 3", desc: "lorem ipsum"}]},
  {title: 'group 2', items: [{title: "title 4", desc: "lorem ipsum"}, {title: " title 5", desc: "lorem ipsum"}]},
  {title: 'group 3', items: [{title: "title 6", desc: "lorem ipsum"}, {title: "1", desc: "lorem ipsum"}]}
]

function DragList({setIsOpen}) {
  
  const [data, setData] = useState();  
  useEffect(() => {
    if (localStorage.getItem('List')) {
      console.log(localStorage.getItem('List'))
      setData(JSON.parse(localStorage.getItem('List')))
    } else {
      setData(defaultData)
    }
  }, [setData])
  return (
    <div className="App">
      <header className="App-header">
      <DragNDrop data={data} setIsOpen={setIsOpen}  />
     
      </header>
    </div>
  );
}
//aviliove@unipamplona.edu.co
export default DragList;

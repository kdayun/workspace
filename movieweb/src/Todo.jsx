
import React, {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo ===""){
      return;
    }
    //update toDo by value
    setToDo("");
    //update toDos by func
    setToDos(currentArray => [toDo, ...currentArray])
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
      <input 
        onChange={onChange} 
        value={toDo} 
        type="text" 
        placeholder="Write your to do..."></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ol>{toDos.map((item, index) => <li key={index}>{item}</li>)}</ol>
    </div>
  );  //string -> li
}

export default App;

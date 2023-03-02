import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [toDo, setToDo] = useState([
    {
      title: "Shopping",
      discrepion: "Go to the grocery store",
      text: "Buy Bananas, Maple Syrup and pancakes.",
      importance: 5,
    },
    {
      title: "Walk",
      discrepion: "Go to a walk",
      text: "Go to a walk with your dog",
      importance: 2,
    },
  ]);

  const handelFilter = ({ target: { id } }) => {
    setToDo(toDo.filter((toDo) => `btn${toDo.title}` != id));
  };

  let listHtml = toDo.map((task, i) => {
    return (
      <div key={task.title} className="task">
        <h3>
          {i}. {task.title}{" "}
        </h3>
        {task.discrepion} <br></br>
        {task.text} <br></br>
        importance: {task.importance} <br></br>
        <button onClick={handelFilter} id={"btn" + task.title}>
          X
        </button>
        <br></br>
      </div>
    );
  });

  const Sort = ({ target: { value } }) => {
    setToDo([...toDo].sort((a, b) => sortOptions[value](a, b)));
  };

  const sortOptions = {
    importance: (a, b) => a.importance - b.importance,
    title: (a, b) => a.title.localeCompare(b.title),
    firstLetter: (a, b) => a.title.localeCompare(b.title),
  };

  return (
    <div className="App">
      <Form setToDo={setToDo} toDo={toDo}></Form>

      <select onChange={Sort}>
        <option value="importance">sort by importance</option>
        <option value="title">sort by title</option>
        <option value="firstLetter">sort by first letter</option>
      </select>

      <div className="container">{listHtml}</div>
    </div>
  );
}

export default App;

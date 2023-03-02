import { useState } from "react";

const Form = ({ setToDo, toDo }) => {
  const labels = ["title", "discrepion", "text", "importance"];
  const [newToDo, setNewToDo] = useState({
    title: "",
    discrepion: "",
    text: "",
    importance: "",
  });
  const [isOk, setIsOk] = useState(true);
  const [errorMsg, setErrorMsg] = useState("Title already exists");

  const handleInput = ({ target: { value, name } }) => {
    setIsOk(true);
    setNewToDo({
      ...newToDo,
      [name]: value,
    });

    toDo.forEach((toDo) => {
      if (toDo.title === value) {
        setIsOk(false);
      }
    });
  };

  let inputHtml = labels.map((label, i) => {
    return (
      <div key={label}>
        <input
          type="text"
          id={i}
          name={label}
          placeholder={label}
          value={newToDo[label]}
          onChange={handleInput}
        />
        <br></br>
      </div>
    );
  });

  const addNewToDo = (e) => {
    if (newToDo.title === "") {
      setErrorMsg("Title cannot be empty");
      setIsOk(false);
    } else if (isOk) {
      setToDo([...toDo, newToDo]);
      setNewToDo({
        title: "",
        discrepion: "",
        text: "",
        importance: "",
      });
    }
  };

  return (
    <div className="info">
      <h3>Info</h3>
      {inputHtml}

      <button
        type="submit"
        value="Submit"
        onClick={addNewToDo}
        disabled={!isOk}
      >
        {" "}
        submit
      </button>
      {!isOk && <p>{errorMsg}</p>}
    </div>
  );
};

export default Form;

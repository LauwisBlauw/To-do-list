import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    const newInputValue = e.target.value;
    console.log("Input value changed:", newInputValue);
    setInputValue(newInputValue);
  };

  const handleAddTodo = () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue !== "") {
      console.log("Current todoList:", todoList);
      console.log("New item to be added:", trimmedInputValue);

      // Create a new array with the existing todoList items and the new item
      const updatedTodoList = [...todoList, trimmedInputValue];

      console.log("Updated todoList:", updatedTodoList);
      setTodoList(updatedTodoList);
      setInputValue("");
      console.log("Input value reset to empty string");
    } else {
      console.log("Input value is empty, skipping addition");
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

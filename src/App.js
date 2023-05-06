import "./App.css";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { text: "Do all exercises!", id: "ex1" },
    { text: "Finish the course!", id: "ex2" },
  ]);

  const dataHandler = (data) => {
    setTodoList((prevState) => {
      const newToDo = [
        { text: data, id: Math.random().toString() },
        ...prevState,
      ];
      return newToDo;
    });
  };

  const removeHandler = (taskId) => {
    setTodoList((prevState) => {
      const newList = prevState.filter((data) => data.id !== taskId);
      return newList;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (todoList.length > 0)
    content = <CourseGoalList items={todoList} onRemove={removeHandler} />;
  return (
    <div>
      <section id="goal-form">
        <CourseInput onGetData={dataHandler} />
      </section>

      <section id="goals">{content}</section>
    </div>
  );
}

export default App;

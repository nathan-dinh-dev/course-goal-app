import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import { useState } from "react";

const CourseInput = (props) => {
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onGetData(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input required type="text" onChange={inputHandler} value={input} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

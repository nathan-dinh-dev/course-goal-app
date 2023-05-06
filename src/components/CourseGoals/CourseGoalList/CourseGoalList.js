import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = (props) => {
  const deleteHandler = (taskId) => {
    props.onRemove(taskId);
  };

  return (
    <ul className="goal-list">
      {props.items.map((data) => (
        <CourseGoalItem key={data.id} id={data.id} onDelete={deleteHandler}>
          {data.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;

import './TaskDate.css';

const TaskDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="task-date">
      <div className="task-date__month">{month}</div>
      <div className="task-date__year">{year}</div>
      <div className="task-date__day">{day}</div>
    </div>
  );
};

export default TaskDate;

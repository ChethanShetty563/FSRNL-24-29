import React from 'react';
import Card from '../Card/Card';
import TaskDate from './TaskDate';
import './TaskItem.css';

const TaskItem = (props) => {
  return (
    <Card className="task-item">
      <TaskDate date={props.date} />
      <div className="task-item__description">
        <h2>{props.title}</h2>
        <div className="task-item__price">{props.status}</div>
      </div>
    </Card>
  );
};

export default TaskItem;

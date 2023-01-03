import React, { useState } from 'react';
import Card from '../Card/Card';
import './Tasks.css';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

const Tasks = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredTasks = props.tasks.filter((task) => {
    return task.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="tasks">
        <TaskFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <TaskList items={filteredTasks} />
      </Card>
    </div>
  );
};

export default Tasks;

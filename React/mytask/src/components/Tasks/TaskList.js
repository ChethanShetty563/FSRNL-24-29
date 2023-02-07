import React, { Component } from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

// const TaskList = (props) => {
//   if (props.items.length === 0) {
//     return <h2 className="task-list__fallback">found no task</h2>;
//   }

//   return (
//     <ul className="task-list">
//       {props.items.length === 0 ? (
//         <h2 className="task-list__fallback">found no task</h2>
//       ) : (
//         props.items.map((task) => {
//           return <TaskItem key={task.id} title={task.title} status={task.status} date={task.date} />;
//         })
//       )}
//     </ul>
//   );
// };

// export default TaskList;

class TaskList extends Component {
  render() {
    return (
      <ul className="task-list">
        {this.props.items.length === 0 ? (
          <h2 className="task-list__fallback">found no task</h2>
        ) : (
          this.props.items.map((task) => {
            return <TaskItem key={task.id} title={task.title} status={task.status} date={task.date} />;
          })
        )}
      </ul>
    );
  }
}

export default TaskList;

import React, { Component, useState } from 'react';
import TaskForm from './TaskForm';

import './NewTask.css';

// const NewTask = (props) => {
//   console.log('Abcd');
//   const [formState, setFormState] = useState(false);

//   const onSaveTaskHandler = (enteredTaskData) => {
//     const taskData = {
//       ...enteredTaskData,
//       id: Math.random().toString(),
//     };
//     props.onAddTask(taskData);
//     console.log(taskData);
//   };

// //   server <==== chnage
//   const newFormHAndler = () => {
//     setFormState((prevstate) => {
//       return !prevstate;
//     });
//   };

//   return (
//     <div className="new-task">
//       {formState ? (
//         <TaskForm onCancel={newFormHAndler} onSaveTaskData={onSaveTaskHandler} />
//       ) : (
//         <button onClick={newFormHAndler}>Add New Task</button>
//       )}
//     </div>
//   );
// };

class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      formState: true,
    };
  }

  componentDidMount() {
    console.log('Excuted at first');
    this.setState({
      formState: false,
    });
  }

  componentDidUpdate(prevProps, prevstate) {
    if (prevstate.formState !== this.state.formState) {
      this.setState({});
    }
  }
  // fetch data from server

  componentWillUnmount() {
    console.log('');
  }

  onSaveTaskHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };
    this.props.onAddTask(taskData);
    console.log(taskData);
  };

  newFormHAndler = () => {
    this.setState({ formState: !this.state.formState });
  };
  render() {
    return (
      <div className="new-task">
        {this.state.formState ? (
          <TaskForm onCancel={this.newFormHAndler.bind(this)} onSaveTaskData={this.onSaveTaskHandler.bind(this)} />
        ) : (
          <button onClick={this.newFormHAndler}>Add New Task</button>
        )}
      </div>
    );
  }
}

export default NewTask;

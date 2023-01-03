import React, { useState } from 'react';
import Tasks from './components/Tasks/Tasks';

const DUMMY_TASK = [
  {
    id: 'e1',
    title: 'Complete React Course',
    status: 'PRogress',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Complete React Project',
    status: 'Started',
    date: new Date(2021, 2, 18),
  },
  {
    id: 'e3',
    title: 'Upload the Project to Github',
    status: 'Not Started',
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e4',
    title: 'Complete the Book',
    status: 'Comoleted',
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [task, setTask] = useState(DUMMY_TASK);

  return (
    <div className="App">
      <Tasks tasks={task} />
    </div>
  );
}

export default App;

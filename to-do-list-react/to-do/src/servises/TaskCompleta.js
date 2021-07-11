const TaskCompleta = (event) => {
  if (event.target.className === 'tasks') {
    event.target.className = 'tasks completed';
  } else if (event.target.className === 'tasks completed') {
    event.target.className = 'tasks';
  }
}

export default TaskCompleta;

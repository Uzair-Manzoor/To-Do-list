import { tasks, storeTasksToLocalStorage } from './taskFunctions.js';

const clearAllCompletedTasks = () => {
  const filteredTasks = tasks.filter((task) => !task.completed);

  // Sort the filtered tasks based on original indexes
  filteredTasks.sort((a, b) => a.index - b.index);

  // Update the indexes starting from 1
  filteredTasks.forEach((task, newIndex) => {
    task.index = newIndex + 1;
  });

  tasks.length = 0;
  tasks.push(...filteredTasks);
  storeTasksToLocalStorage();
};

export default clearAllCompletedTasks;
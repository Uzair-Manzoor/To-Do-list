import './index.css';

const taskListContainer = document.getElementById('todoList');
const tasks = [
  {
    description: 'Complete AwesomeBooks',
    completed: true,
    index: 1,
  },
  {
    description: 'Complete Webpack Setup',
    completed: true,
    index: 2,
  },
  {
    description: 'Complete todo list project',
    completed: false,
    index: 3,
  },
];

export default class DisplayTasks {
  static renderTasks() {
    tasks.sort((a, b) => a.index - b.index);
    taskListContainer.innerHTML = '';
    tasks.forEach((task, index) => {
      taskListContainer.innerHTML += `
        <li class="task" draggable="true" data-index="${index}">
          <div class="checkbox-container">
            <input type="checkbox" name="${task.description}" ${task.completed ? 'checked' : ''}>
            <input type="text" value="${task.description}" readonly>
          </div>
          <i class="fas fa-ellipsis-vertical" data-index="${index}"></i>
        </li>
      `;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  DisplayTasks.renderTasks();
});
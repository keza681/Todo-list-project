import './index.css';

const tasks = [
  {
    description: 'Do the gym',
    completed: true,
    index: 0,
  },
  {
    description: 'Dancing',
    completed: true,
    index: 1,
  },
  {
    description: 'Cooking Dinner',
    completed: false,
    index: 2,
  },
];

const taskWrapper = document.querySelector('.to-dos');

const showList = () => {
  taskWrapper.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    taskWrapper.innerHTML += `
    <form id="form">
      <input type="checkbox" id="${tasks[i].index}" name="task" value="task">
      <label for="${tasks[i].index}">${tasks[i].description}</label>
      <i class="fa fa fa-times"></i><br>
    </form>
    `;
  }
};

window.addEventListener('load', showList);
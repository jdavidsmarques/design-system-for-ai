/* ====================================
   Task Manager Application
   JavaScript - ES6+ Standards
   ==================================== */

// ====================================
// State Management
// ====================================

const state = {
  tasks: [],
  currentFilter: 'all',
  editingTaskId: null
};

// ====================================
// Utility Functions
// ====================================

const generateId = () => {
  return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const getCurrentDateTime = () => {
  return new Date().toISOString();
};

// ====================================
// Local Storage Functions
// ====================================

const loadTasksFromStorage = () => {
  const storedTasks = localStorage.getItem('taskManagerTasks');
  if (storedTasks) {
    state.tasks = JSON.parse(storedTasks);
  }
};

const saveTasksToStorage = () => {
  localStorage.setItem('taskManagerTasks', JSON.stringify(state.tasks));
};

// ====================================
// Task CRUD Operations
// ====================================

const createTask = (taskData) => {
  const newTask = {
    id: generateId(),
    title: taskData.title,
    description: taskData.description || '',
    status: taskData.status,
    createdAt: getCurrentDateTime(),
    dueDate: taskData.dueDate,
    comments: []
  };

  state.tasks.push(newTask);
  saveTasksToStorage();
  return newTask;
};

const updateTask = (taskId, updatedData) => {
  const taskIndex = state.tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    state.tasks[taskIndex] = {
      ...state.tasks[taskIndex],
      ...updatedData
    };
    saveTasksToStorage();
    return state.tasks[taskIndex];
  }

  return null;
};

const deleteTask = (taskId) => {
  state.tasks = state.tasks.filter(task => task.id !== taskId);
  saveTasksToStorage();
};

const getTaskById = (taskId) => {
  return state.tasks.find(task => task.id === taskId);
};

const getFilteredTasks = () => {
  if (state.currentFilter === 'all') {
    return state.tasks;
  }
  return state.tasks.filter(task => task.status === state.currentFilter);
};

// ====================================
// Comment Operations
// ====================================

const addComment = (taskId, commentText) => {
  const task = getTaskById(taskId);

  if (task) {
    const newComment = {
      id: generateId(),
      text: commentText,
      createdAt: getCurrentDateTime()
    };

    task.comments.push(newComment);
    saveTasksToStorage();
    return newComment;
  }

  return null;
};

// ====================================
// DOM Manipulation Functions
// ====================================

const renderTaskCard = (task) => {
  const card = document.createElement('article');
  card.className = 'task-card';
  card.setAttribute('data-task-id', task.id);
  card.setAttribute('role', 'article');
  card.setAttribute('aria-label', `Task: ${task.title}`);

  const statusClass = `task-card__status--${task.status}`;
  const commentsCount = task.comments.length;

  card.innerHTML = `
    <div class="task-card__header">
      <h3 class="task-card__title">${escapeHtml(task.title)}</h3>
      <span class="task-card__status ${statusClass}">${task.status}</span>
    </div>

    ${task.description ? `
      <p class="task-card__description">${escapeHtml(task.description)}</p>
    ` : ''}

    <div class="task-card__meta">
      <div class="task-card__meta-item">
        <span class="task-card__meta-label">Created:</span>
        <span>${formatDate(task.createdAt)}</span>
      </div>
      <div class="task-card__meta-item">
        <span class="task-card__meta-label">Due Date:</span>
        <span>${formatDate(task.dueDate)}</span>
      </div>
      ${commentsCount > 0 ? `
        <div class="task-card__meta-item">
          <span class="task-card__comments-count">${commentsCount} comment${commentsCount !== 1 ? 's' : ''}</span>
        </div>
      ` : ''}
    </div>

    <div class="task-card__actions">
      <button
        type="button"
        class="task-card__btn task-card__btn--edit"
        data-action="edit"
        aria-label="Edit task: ${escapeHtml(task.title)}"
      >
        Edit
      </button>
      <button
        type="button"
        class="task-card__btn task-card__btn--delete"
        data-action="delete"
        aria-label="Delete task: ${escapeHtml(task.title)}"
      >
        Delete
      </button>
    </div>
  `;

  return card;
};

const renderTasks = () => {
  const taskListContainer = document.getElementById('task-list');
  const emptyState = document.getElementById('empty-state');
  const filteredTasks = getFilteredTasks();

  taskListContainer.innerHTML = '';

  if (filteredTasks.length === 0) {
    emptyState.classList.remove('hidden');
    taskListContainer.appendChild(emptyState);
  } else {
    emptyState.classList.add('hidden');
    filteredTasks.forEach(task => {
      const taskCard = renderTaskCard(task);
      taskListContainer.appendChild(taskCard);
    });
  }
};

const renderComments = (taskId) => {
  const commentsList = document.getElementById('comments-list');
  const task = getTaskById(taskId);

  if (!task) return;

  commentsList.innerHTML = '';

  if (task.comments.length === 0) {
    commentsList.innerHTML = `
      <p class="task-comments__empty">No comments yet. Add the first comment!</p>
    `;
    return;
  }

  task.comments.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.className = 'task-comments__item';
    commentElement.innerHTML = `
      <div class="task-comments__item-header">
        <span class="task-comments__item-date">${formatDate(comment.createdAt)}</span>
      </div>
      <p class="task-comments__item-text">${escapeHtml(comment.text)}</p>
    `;
    commentsList.appendChild(commentElement);
  });
};

// ====================================
// Modal Functions
// ====================================

const openModal = (taskId) => {
  const modal = document.getElementById('task-modal');
  const editForm = document.getElementById('task-edit-form');
  const task = getTaskById(taskId);

  if (!task) return;

  state.editingTaskId = taskId;

  document.getElementById('edit-task-title').value = task.title;
  document.getElementById('edit-task-description').value = task.description;
  document.getElementById('edit-task-due-date').value = task.dueDate;
  document.getElementById('edit-task-status').value = task.status;

  renderComments(taskId);

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  const firstInput = editForm.querySelector('input, textarea, select');
  if (firstInput) {
    firstInput.focus();
  }
};

const closeModal = () => {
  const modal = document.getElementById('task-modal');
  const editForm = document.getElementById('task-edit-form');
  const commentForm = document.getElementById('comment-form');

  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';

  editForm.reset();
  commentForm.reset();
  state.editingTaskId = null;
};

// ====================================
// Filter Functions
// ====================================

const setFilter = (filter) => {
  state.currentFilter = filter;

  const filterButtons = document.querySelectorAll('.task-filters__btn');
  filterButtons.forEach(btn => {
    const btnFilter = btn.getAttribute('data-filter');
    if (btnFilter === filter) {
      btn.classList.add('task-filters__btn--active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('task-filters__btn--active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  renderTasks();
};

// ====================================
// Event Handlers
// ====================================

const handleTaskFormSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const taskData = {
    title: formData.get('title').trim(),
    description: formData.get('description').trim(),
    dueDate: formData.get('dueDate'),
    status: formData.get('status')
  };

  if (!taskData.title || !taskData.dueDate) {
    alert('Please fill in all required fields.');
    return;
  }

  createTask(taskData);
  event.target.reset();
  renderTasks();

  const successMessage = document.createElement('div');
  successMessage.textContent = 'Task created successfully!';
  successMessage.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 24px;
    background-color: var(--color-success);
    color: white;
    border-radius: var(--radius-small);
    box-shadow: var(--shadow-medium);
    z-index: 9999;
  `;
  document.body.appendChild(successMessage);

  setTimeout(() => {
    successMessage.remove();
  }, 3000);
};

const handleTaskEditFormSubmit = (event) => {
  event.preventDefault();

  if (!state.editingTaskId) return;

  const formData = new FormData(event.target);
  const updatedData = {
    title: formData.get('title').trim(),
    description: formData.get('description').trim(),
    dueDate: formData.get('dueDate'),
    status: formData.get('status')
  };

  if (!updatedData.title || !updatedData.dueDate) {
    alert('Please fill in all required fields.');
    return;
  }

  updateTask(state.editingTaskId, updatedData);
  closeModal();
  renderTasks();
};

const handleCommentFormSubmit = (event) => {
  event.preventDefault();

  if (!state.editingTaskId) return;

  const commentText = document.getElementById('comment-text').value.trim();

  if (!commentText) {
    alert('Please enter a comment.');
    return;
  }

  addComment(state.editingTaskId, commentText);
  renderComments(state.editingTaskId);
  event.target.reset();
};

const handleTaskCardClick = (event) => {
  const card = event.target.closest('.task-card');
  if (!card) return;

  const taskId = card.getAttribute('data-task-id');
  const action = event.target.getAttribute('data-action');

  if (action === 'edit') {
    openModal(taskId);
  } else if (action === 'delete') {
    const task = getTaskById(taskId);
    if (!task) return;

    const confirmed = confirm(`Are you sure you want to delete "${task.title}"?`);
    if (confirmed) {
      deleteTask(taskId);
      renderTasks();
    }
  }
};

const handleFilterClick = (event) => {
  const filterButton = event.target.closest('.task-filters__btn');
  if (!filterButton) return;

  const filter = filterButton.getAttribute('data-filter');
  setFilter(filter);
};

const handleModalClose = (event) => {
  if (event.target.hasAttribute('data-close-modal')) {
    closeModal();
  }
};

const handleCancelButton = () => {
  const taskForm = document.getElementById('task-form');
  taskForm.reset();
};

// ====================================
// Security - XSS Prevention
// ====================================

const escapeHtml = (text) => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// ====================================
// Keyboard Navigation
// ====================================

const initKeyboardNavigation = () => {
  document.addEventListener('keydown', (event) => {
    const modal = document.getElementById('task-modal');
    const isModalOpen = !modal.hasAttribute('hidden');

    if (event.key === 'Escape' && isModalOpen) {
      closeModal();
    }
  });
};

// ====================================
// Event Listeners Setup
// ====================================

const initEventListeners = () => {
  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', handleTaskFormSubmit);

  const cancelBtn = document.getElementById('cancel-btn');
  cancelBtn.addEventListener('click', handleCancelButton);

  const taskEditForm = document.getElementById('task-edit-form');
  taskEditForm.addEventListener('submit', handleTaskEditFormSubmit);

  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', handleCommentFormSubmit);

  const taskListContainer = document.getElementById('task-list');
  taskListContainer.addEventListener('click', handleTaskCardClick);

  const taskFilters = document.querySelector('.task-filters__container');
  taskFilters.addEventListener('click', handleFilterClick);

  const modal = document.getElementById('task-modal');
  modal.addEventListener('click', handleModalClose);

  initKeyboardNavigation();
};

// ====================================
// Initialization
// ====================================

const init = () => {
  loadTasksFromStorage();
  initEventListeners();
  renderTasks();

  const today = new Date().toISOString().split('T')[0];
  document.getElementById('task-due-date').setAttribute('min', today);
  document.getElementById('edit-task-due-date').setAttribute('min', today);

  console.log('Task Manager initialized successfully');
};

document.addEventListener('DOMContentLoaded', init);

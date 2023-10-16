
import axios from 'axios';

// Crie uma instância do Axios com a URL base da sua API
const tasksAPI = axios.create({ baseURL: 'http://localhost:8080/api/token/generate-token' });

// Adicione um interceptor para incluir o token JWT nas solicitações
tasksAPI.interceptors.request.use((config) => {
  // Obtenha o token JWT armazenado no localStorage
  const token = localStorage.getItem('user_token');

  // Se houver um token, inclua-o no cabeçalho Authorization
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Função para buscar todas as tarefas
async function getAllTasks() {
  try {
    const response = await tasksAPI.get('/todos');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Função para buscar uma tarefa por ID
async function getTaskById(id) {
  try {
    const response = await tasksAPI.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Função para salvar uma nova tarefa
async function saveTask(task) {
  try {
    const response = await axios.post('/todos/create', task);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Função para excluir uma tarefa por ID
async function deleteTask(id) {
  try {
    const response = await tasksAPI.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Função para atualizar uma tarefa
async function updateListArray(task) {
  try {
    const response = await tasksAPI.put(`/todos/${task.id}`, task);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getAllTasks,
  getTaskById,
  saveTask,
  deleteTask,
  updateListArray,
};

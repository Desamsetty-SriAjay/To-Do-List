import axios from "axios"

const BASE_URL=import.meta.env.VITE_BACKEND_URL+"/api";

export const createTodo=(task)=>{
    return axios.post(`${BASE_URL}/todos`,{task})
}

export const getTodos = () => {
  return axios.get(`${BASE_URL}/todos`);
};

export const deleteTodo = (id) => {
  return axios.delete(`${BASE_URL}/todos/${id}`);
};

export const updateTodo = (id,updatedTask) => {
  return axios.put(`${BASE_URL}/todos/${id}`, { task: updatedTask });
};



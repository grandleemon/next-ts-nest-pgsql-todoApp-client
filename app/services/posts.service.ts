import axios from "axios";

const API_URL = "http://localhost:3000"

axios.defaults.baseURL = API_URL

export interface ITodo {
  id: number
  title: string
  done?: boolean
  createdAt?: string
}

export const PostsService = {

  async getAll() {
    return await axios.get<ITodo[]>('/todos')
  },

  async getTodoById(id?: number) {
    return await axios.get<ITodo>(`/todos/${id}`)
  },

  async createTodo(title: string) {
    console.log(title)
    return await axios.post(`/todos`, {title: title})
  }
}
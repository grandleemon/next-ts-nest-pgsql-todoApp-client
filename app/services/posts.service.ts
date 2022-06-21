import axios from "axios";

const API_URL = "http://localhost:3000"

axios.defaults.baseURL = API_URL

export interface ITodo {
  id: number
  title: string
  done?: boolean
}

export const PostsService = {
  async getAll() {
    return await axios.get<ITodo[]>('/todos')
  }
}
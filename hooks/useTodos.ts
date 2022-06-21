import {useQuery} from "react-query";
import {ITodo, PostsService} from "../app/services/posts.service";

export const useTodos = () => {
  const {data: todos, isLoading} = useQuery(
    'posts',
    () => PostsService.getAll(),
    {
      onError: (error: any) => {
        alert(error.message)
      },
      select: ({data}): ITodo[] => {
        return data.map(todo => todo)
      }
    })
  return {isLoading, todos}
}
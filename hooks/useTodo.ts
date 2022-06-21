import {useQuery} from "react-query";
import {ITodo, PostsService} from "../app/services/posts.service";

export const useTodo = (id?: number) => {
  const {data: todo, isLoading} = useQuery(
    ['posts', id],
    () => PostsService.getTodoById(id),
    {
      onError: (error: any) => {
        alert(error.message)
      },
      select: ({data}): ITodo => data,
      enabled: !!id
    })
  return {isLoading, todo}
}
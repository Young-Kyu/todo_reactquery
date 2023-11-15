import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { todoServiceInstance } from "../../service/todo/TodoService";
import CustomServerError from "../../systemConfig/CustomError";
import { QueryKeys } from "../QueryKeys";

const TODO_STAIL_TIME = 60 * 1000 * 1;

export const useTodoQueries = () => {

  const queryClient = useQueryClient();

  const mutationSuccessHandler = (successMessage: string) => {
    // showToast({
    //   actionType: 'success',
    //   toastMessage: successMessage,
    // });
  };

  const refetchSuccessQueries = () => {
    queryClient.invalidateQueries([QueryKeys.GET_ME]);
  };

  const FetchTodoList = () => {
    const fetcher = todoServiceInstance.getTodoList;
    const result = useQuery({
      queryKey : [QueryKeys.GET_ME],
      queryFn: fetcher,
      retry : 0,
    });
    return result;
  };

  const FetchUserInfo = () => {
    const fetcher = todoServiceInstance.getUserInfo;
    const result = useQuery({
      queryKey : [QueryKeys.USER_INFO],
      queryFn: fetcher,
      retry : 0,
    });
    return result;
  };


  return {
    FetchTodoList,
    FetchUserInfo,
  }
}
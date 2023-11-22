import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "../QueryKeys";
import { userServiceInstance } from "../../service/user/UserService";
import { UserListRequestDTO } from "./model/UserModel";

const USER_STAIL_TIME = 60 * 1000 * 1;

export const useUserQueries = () => {

  const queryClient = useQueryClient();

  const FetchUserInfo = (userToken: string, enable?: boolean) => {

    const nonefetch = userToken.length > 0 && enable;
    const fetcher = () => userServiceInstance.getMyProfile(userToken)
    const result = useQuery({
      queryKey: [QueryKeys.GET_ME],
      queryFn: fetcher,
      enabled: nonefetch,
      retry: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    });
    return result;
  };

  const FetchUserGoogleLogin = () => {

    const fetcher = () => userServiceInstance.googleLoginTest()
    const result = useQuery({
      queryKey: [QueryKeys.GOOGLE],
      queryFn: fetcher,
      enabled: false,
      retry: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    });
    return result;
  };

  const FetchUserList = (request: UserListRequestDTO) => {
    const fetcher = () => userServiceInstance.getUserList(request);
    const result = useQuery({
      queryKey: [QueryKeys.USER_LIST, request.page, request.search],
      queryFn: fetcher,
      refetchOnWindowFocus: false,
    });

    return result;
  }

  const FetchUserDetail = (userId: string) => {
    const fetcher = () => userServiceInstance.getUserDetail(userId);
    const result = useQuery({
      queryKey: [QueryKeys.USER_DETAIL, userId],
      queryFn: fetcher,
      refetchOnWindowFocus: false,
      enabled: userId !== '',
    });
    return result;
  }

  return {
    FetchUserInfo,
    FetchUserGoogleLogin,
    FetchUserList,
    FetchUserDetail,
  }
}
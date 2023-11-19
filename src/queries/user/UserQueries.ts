import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "../QueryKeys";
import { userServiceInstance } from "../../service/user/UserService";

const USER_STAIL_TIME = 60 * 1000 * 1;

export const useUserQueries = () => {

  const queryClient = useQueryClient();

  const FetchUserLogin = (id: string, password: string) => {
    const fetcher = () => userServiceInstance.postUserLogin(id, password)
    const result = useQuery({
      queryKey: [QueryKeys.LOGIN],
      queryFn: fetcher,
      enabled: false,
      retry: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 0
    });
    return result;
  };

  const FetchUserLogout = () => {
    const fetcher = () => userServiceInstance.postUserLogout()
    const result = useQuery({
      queryKey: [QueryKeys.LOGOUT],
      queryFn: fetcher,
      enabled: false,
      retry: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 0
    });
    return result;
  };

  const FetchUserInfo = (userToken: string, enable?: boolean) => {

    const nonefetch = userToken.length > 0 && enable;
    const fetcher = () => userServiceInstance.getMyProfile(userToken)
    const result = useQuery({
      queryKey: [QueryKeys.LOGOUT],
      queryFn: fetcher,
      enabled: nonefetch,
      retry: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      // staleTime: USER_STAIL_TIME
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

  return {
    FetchUserLogin,
    FetchUserLogout,
    FetchUserInfo,
    FetchUserGoogleLogin
  }
}
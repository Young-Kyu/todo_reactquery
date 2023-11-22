import { AxiosResponse } from "axios";
import baseSerive, { BaseSeriveRequest } from "../BaseService";
import { UserListRequestDTO, UserListResponseDTO, UserResponseDTO } from "../../queries/user/model/UserModel";


class UserService {

  public getMyProfile = async (userToken: string) => {
    const apiRequest: BaseSeriveRequest = {
      method: "get",
      url: '/user/my',
    }
    const result: { emailAddress: string; userLevel: number } = await baseSerive(apiRequest);
    return result;
  }

  public googleLoginTest = async () => {
    const apiRequest: BaseSeriveRequest = {
      method: "get",
      url: '/auth/google',
    }
    const result: { url: string } = await baseSerive(apiRequest);
    return result;
  };

  public getUserList = async (request: UserListRequestDTO) => {
    const apiRequest: BaseSeriveRequest = {
      method: "get",
      url: '/user/list',
      data: request
    }
    const result: UserListResponseDTO = await baseSerive(apiRequest);
    return result;
  };

  public getUserDetail = async (userId: string) => {
    const apiRequest: BaseSeriveRequest = {
      method: "get",
      url: `/user/${userId}`,
    }
    const result: UserResponseDTO = await baseSerive(apiRequest);
    return result;
  };

}

export const userServiceInstance = new UserService();



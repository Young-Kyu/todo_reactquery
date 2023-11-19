import { AxiosResponse } from "axios";
import baseSerive, { BaseSeriveRequest } from "../BaseService";


class UserService {

  public postUserLogin = async (id: string, password: string) => {
    const apiRequest: BaseSeriveRequest = {
      method: "get",
      url: '/login',
      params: {
        userId: 'userId',
        password: 'password'
      }
    }
    const result: { userToken: string } = await baseSerive(apiRequest);
    return result;
  }

  public postUserLogout = async () => {
    const apiRequest: BaseSeriveRequest = {
      method: "get",
      url: '/logout',
    }
    const result: void = await baseSerive(apiRequest);
    return result;
  }

  public getMyProfile = async (userToken: string) => {
    const apiRequest: BaseSeriveRequest = {
      method: "get",
      url: '/user/my',
    }
    const result: { emailAddress: string; userLevel: number } = await baseSerive(apiRequest);
    return result;
  }

  public test = async () => {
    const apiRequest: BaseSeriveRequest = {
      method: "get",
      url: '/api/user',
    }
    const result: void = await baseSerive(apiRequest);
    return result;
  };

  public googleLoginTest = async () => {
    const apiRequest: BaseSeriveRequest = {
      method: "get",
      url: '/auth/google',
    }
    const result: { url: string } = await baseSerive(apiRequest);
    return result;
  };

}

export const userServiceInstance = new UserService();

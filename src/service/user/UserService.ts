import { AxiosResponse } from "axios";
import baseSerive, { BaseSeriveRequest } from "../BaseService";


class UserService {

  public postUserLogin = async (id: string, password: string) => {
    const apiRequest: BaseSeriveRequest<{ userId: string, password: string }> = {
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
    const apiRequest: BaseSeriveRequest<undefined> = {
      method: "get",
      url: '/logout',
    }
    const result: void = await baseSerive(apiRequest);
    return result;
  }

  public getUserInfo = async (userToken: string) => {
    const apiRequest: BaseSeriveRequest<{ userToken: string }> = {
      method: "get",
      url: '/api/me',
      params: {
        userToken: userToken
      }
    }
    const result: void = await baseSerive(apiRequest);
    return result;
  }

  public test = async () => {
    const apiRequest: BaseSeriveRequest<undefined> = {
      method: "get",
      url: '/api/user',
    }
    const result: void = await baseSerive(apiRequest);
    return result;
  }

}

export const userServiceInstance = new UserService();

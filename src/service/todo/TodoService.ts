import { AxiosResponse } from "axios";
import baseSerive, { BaseSeriveRequest } from "../BaseService";


class TodoService {

  public getTodoList = async () => {
    const apiRequest: BaseSeriveRequest<undefined> = {
      method: "get",
      url: '/api/me',
    }
    const result: {name : string} = await baseSerive(apiRequest);
    return result;
  }

  public getUserInfo = async () => {
    const apiRequest: BaseSeriveRequest<undefined> = {
      method: "get",
      url: '/api/regions',
    }
    const result: any = await baseSerive(apiRequest);
    return result;
  }
}

export const todoServiceInstance = new TodoService();

const delay = () => {
  return new Promise(res => {
    setTimeout(() => res(true), 1000)
  })
}
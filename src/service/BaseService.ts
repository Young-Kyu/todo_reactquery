import axios, { AxiosHeaders, AxiosResponse } from "axios";
import CustomServerError from "../systemConfig/CustomError";

const interceptConfig = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

interceptConfig.interceptors.request.use(

  async function (config) {
    try {
      return config;
    } catch (err) {
      return Promise.reject(err);
    }
  }
)

interceptConfig.interceptors.response.use(

  function (res) {
    try {
      // if('name' in res.data){
      //   throw new CustomServerError(500,'testError', 'testErrorCode');
      // }
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }
);

const GET = <T extends any>(url: string, method: ServiceMethodType, rest: any, params?: T) => {
  return interceptConfig({
    url,
    method: 'get',
    params: params,
    ...rest
  })
}

const POST = <T extends any>(url: string, method: ServiceMethodType, rest: any, params?: T) => {
  return interceptConfig({
    url,
    method,
    data: params,
    ...rest
  })
};

const baseSerive = async <T extends any>({ method, url, data, ...rest }: BaseSeriveRequest<T>): Promise<any> => {
  let callback;

  if (method === 'get') {
    callback = GET;
  } else {
    callback = POST;
  }

  const response: AxiosResponse<any> = await callback(url, method, data, rest);

  return response;

}

export interface BaseSeriveRequest<T> {
  method: ServiceMethodType;
  params?: T | undefined;
  url: string;
  [key: string]: any;
};

export type ServiceMethodType = "get" | 'post' | 'put' | 'delete';

export default baseSerive;
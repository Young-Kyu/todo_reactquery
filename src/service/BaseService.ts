import axios, { AxiosHeaders, AxiosResponse } from "axios";
import CustomServerError from "../systemConfig/CustomError";
import { sessionStorageServiceInstance } from "./common/SessionStorageService";

interface RestApiResponse {
  successOrNot: 'Y' | 'N',
  data: any;
  status: string;
}

const interceptConfig = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

interceptConfig.interceptors.request.use(

  async function (config) {
    try {
      const userToken = sessionStorageServiceInstance.getUserToken();
      if (userToken) {
        config.headers['Authorization'] = `Bearer ${userToken}`;
      }
      return config;
    } catch (err) {
      return Promise.reject(err);
    }
  }
)

interceptConfig.interceptors.response.use(

  function (res) {
    try {
      return res;
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

const baseSerive = async <T extends any>({ method, url, data, ...rest }: BaseSeriveRequest) => {
  let callback;

  if (method === 'get') {
    callback = GET;
  } else {
    callback = POST;
  }

  const response: AxiosResponse<RestApiResponse> = await callback(url, method, data, rest);

  if (response && response.data) {
    if (response.data.successOrNot === 'Y') {
      return response.data.data;
    }
  }
  return response

}

export interface BaseSeriveRequest {
  method: ServiceMethodType;
  params?: any;
  url: string;
  [key: string]: any;
};

export type ServiceMethodType = "get" | 'post' | 'put' | 'delete';

export default baseSerive;
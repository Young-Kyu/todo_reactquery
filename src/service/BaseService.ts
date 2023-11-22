import axios, { AxiosHeaders, AxiosResponse } from "axios";
import CustomServerError from "../systemConfig/CustomError";
import { sessionStorageServiceInstance } from "./common/SessionStorageService";

interface RestApiResponse {
  successOrNot: 'Y' | 'N',
  data: any;
  status: string;
}

const interceptConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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

const GET = <T extends any>(url: string, method: ServiceMethodType, data: any, rest?: any) => {
  return interceptConfig({
    url,
    method: 'get',
    params: data,
    ...rest
  })
}

const Mutation = <T extends any>(url: string, method: ServiceMethodType, data: T, rest?: any) => {
  return interceptConfig({
    url,
    method,
    data: data,
    ...rest
  })
};

const baseSerive = async <T extends any>({ method, url, data, ...rest }: BaseSeriveRequest) => {
  let callback;

  if (method === 'get') {
    callback = GET;
  } else {
    callback = Mutation;
  }

  try {

    const response: AxiosResponse<RestApiResponse> = await callback(url, method, data, rest);

    if (response && response.data) {

      if (response.data.successOrNot === 'Y') {
        return response.data.data;
      }
    }
    return response
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.successOrNot) {
      throw new CustomServerError(err.response.status, err.response.data.statusCode, err.response.data.statusCode);
    }
    throw err;
  }

}

export interface BaseSeriveRequest {
  method: ServiceMethodType;
  params?: any;
  url: string;
  [key: string]: any;
};

export type ServiceMethodType = "get" | 'post' | 'put' | 'delete';

export default baseSerive;
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import type {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	AxiosError,
	InternalAxiosRequestConfig
} from 'axios';
import { showMessage } from './status';
import { IResponse } from './type';
import { storage } from '@/utils/tools';

const service: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_API_BASEURL,
	timeout: 10000
});

// axios实例拦截请求
service.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const token = storage.get('token');
		if (token) {
			config.headers.authorization = `${token}`;
		}
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

// axios实例拦截响应
service.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response.status === 200) {
			return response;
		}
		showMessage(response.status);
		return response;
	},
	// 请求失败
	(error: any) => {
		const { response } = error;
		if (response) {
			// 请求已发出，但是不在2xx的范围
			showMessage(response.status);
			return Promise.reject(response.data);
		}
		showMessage('网络连接异常,请稍后再试!');
	}
);

const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
	const conf = config;
	return new Promise((resolve) => {
		service.request<any, AxiosResponse<IResponse>>(conf).then((res: AxiosResponse<IResponse>) => {
			const {
				data: { result }
			} = res;
			resolve(result as T);
		});
	});
};

export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
	return request({ ...config, method: 'GET' });
}

export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
	return request({ ...config, method: 'POST' });
}

export function put<T = any>(config: AxiosRequestConfig): Promise<T> {
	return request({ ...config, method: 'put' });
}

export function del<T = any>(config: AxiosRequestConfig): Promise<T> {
	return request({ ...config, method: 'delete' });
}

export default request;

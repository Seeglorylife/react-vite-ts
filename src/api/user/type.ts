import { DynamicObj } from '@/common/types';

export interface ReqParams {
	username: string;
	password: string;
}

export interface ResResult {
	data?: ResResultData;
	status: string | '';
	headers: object;
}

export interface ResResultData<T = DynamicObj> {
	code?: number;
	result?: T;
	message: string;
	status: string;
}

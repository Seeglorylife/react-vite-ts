/** user相关api请求 */
import { get } from '@/request';
import { ReqParams } from './type';

export const getUserInfo = (params: ReqParams) => {
	return get<{ name: string; age: number }>({
		url: 'api/useInfo',
		params
	});
};

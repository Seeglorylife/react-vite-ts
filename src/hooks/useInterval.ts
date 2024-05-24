/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { CbFunc } from '@/common/types';
/**
 *定时器hook
 * @param {CbFunc} callback 回调函数
 * @param {number} [delay=1000] 轮询时间
 * @param {boolean} [immediate=false] 是立即执行
 * @param {any[]} [relies]  依赖
 */
export function useInterval(
	callback: CbFunc,
	delay = 1000,
	immediate = false,
	relies?: React.DependencyList
) {
	const timerId = useRef<NodeJS.Timeout | null>(null);
	useEffect(
		() => {
			immediate && callback();
			timerId.current = setInterval(() => {
				callback();
			}, delay);

			return () => {
				timerId.current && clearInterval(timerId.current);
			};
		},
		relies ? relies : []
	);
}

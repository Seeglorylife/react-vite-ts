import { useEffect } from 'react';
import { endLoading, startLoading } from '@/utils/nprogress';

export function usePageLoading() {
	useEffect(() => {
		startLoading();
		return () => endLoading();
	}, []);
}

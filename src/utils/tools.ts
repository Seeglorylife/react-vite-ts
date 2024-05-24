import dayjs from 'dayjs';

type StoreType = 'local' | 'session';

const getStorageFun = (type: StoreType) => (type === 'local' ? localStorage : sessionStorage);

/** 本地储存读|写 */
export const storage = {
	get(key: string, type: StoreType = 'local') {
		return getStorageFun(type).getItem(key);
	},
	set(key: string, value: string, type: StoreType = 'local') {
		return getStorageFun(type).setItem(key, value);
	},
	clear(keys: string[] = [], type: StoreType = 'local') {
		const target = getStorageFun(type);
		keys.length ? keys.forEach((key) => target.removeItem(key)) : target.clear();
	}
};

/** 文件流下载 */
export const downloadBlobFile = (
	stream: Blob,
	fileName = `下载(${dayjs().format('YYYY-MM-DD')})`,
	suffix = '.xlsx'
) => {
	const blob = new Blob([stream]);
	const objectURL = URL.createObjectURL(blob);
	let link: HTMLAnchorElement | null = document.createElement('a');
	link.download = `${fileName}${suffix}`;
	link.href = objectURL;
	link.click();
	URL.revokeObjectURL(objectURL);
	link = null;
};

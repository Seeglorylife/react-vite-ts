import { useMemo } from 'react';
import type { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const Layout = (props: PropsWithChildren<{ activeKey: string }>) => {
	const { activeKey, children } = props;
	const navigate = useNavigate();

	const items: TabsProps['items'] = useMemo(() => {
		return [
			{
				key: 'home',
				label: '首页',
				children: children
			},
			{
				key: 'about',
				label: '关于',
				children: children
			}
		];
	}, [children]);

	const onChange = (key: string) => {
		if (key === activeKey) return;
		switch (key) {
			case 'home':
				navigate('/');
				break;
			case 'about':
				navigate('/about');
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<Tabs activeKey={activeKey} items={items} onChange={onChange} />
		</div>
	);
};

export default Layout;

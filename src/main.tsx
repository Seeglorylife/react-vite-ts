import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/i18n';
/** 重置样式 这里引入自定义的重置样式也可 */
import '@unocss/reset/tailwind-compat.css';
import 'antd/dist/reset.css';
import 'virtual:uno.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

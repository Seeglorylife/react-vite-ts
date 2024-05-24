// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	transformerDirectives,
	transformerVariantGroup,
	transformerCompileClass
} from 'unocss';
// import presetRemToPx from "@unocss/preset-rem-to-px";
import UnocssIcons from '@unocss/preset-icons';
import presetWind from '@unocss/preset-wind';

export default defineConfig({
	// 自定义规则
	rules: [],
	// 预设规则
	presets: [
		// 引入Tailwind CSS、Windi CSS规则
		presetWind(),
		//属性化模式 文档参考：https://unocss.nodejs.cn/presets/attributify
		presetAttributify(),
		// 纯css图标 文档参考：https://icones.js.org/
		presetIcons({
			// 图标默认样式
			extraProperties: {
				display: 'inline-block',
				height: '1em',
				width: '1em'
			}
			/* options */
		}),
		UnocssIcons()
		// 启用rem转px
		// presetRemToPx({
		//   //默认情况下（1单位 = 0.25rem）html默认字体是16，改为4，每单位就是1px
		//   baseFontSize: 16,
		// }),
	],
	//配置后可以使用 @apply、@screen等指令 参考地址：https://unocss.nodejs.cn/transformers/directives
	transformers: [transformerDirectives(), transformerVariantGroup(), transformerCompileClass()],
	//以下可以按个人需求添加
	shortcuts: {
		'f-c-c': 'flex justify-center items-center'
	},
	// 主题相关
	theme: {}
});

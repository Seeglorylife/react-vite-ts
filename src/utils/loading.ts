/* eslint-disable */
/**
 * loading 的图标
 * @returns loading图标的html代码
 */
const indicator = `
  <div class="ant-spin ant-spin-spinning" >
    <i class="anticon anticon-loading ant-spin-dot bi-loading__spin">
      <svg viewBox="0 0 1024 1024" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true" class="anticon-spin">
        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z">
        </path>
      </svg>
    </i>
  </div>
`;

export default class Loading {
	private $el: HTMLDivElement | null;
	private $indicator: HTMLDivElement;
	/**
	 * 加载状态构造函数
	 * @param {*} options.target 加载状态的宿主元素
	 */
	constructor(options: { target: HTMLDivElement | null }) {
		this.$el = options.target;
		this.$indicator = document.createElement('div');
		this.$indicator.classList.add('bi-loading-mask');
		this.$indicator.innerHTML = indicator;
	}

	public loading() {
		if (!this.$el) return;
		if (window.getComputedStyle(this.$el).position === 'static') {
			this.$el.classList.add('bi-loading__parent--relative');
		}
		const { width, height } = this.$el.getBoundingClientRect();
		if ((width && width < 60) || (height && height < 60)) {
			this.$indicator.classList.add('bi-loading--sm');
		}
		this.$el.appendChild(this.$indicator);
	}

	public close() {
		if (!this.$el) return;
		this.$el.classList.remove('bi-loading__parent--relative');
		this.$indicator.remove();
	}
}

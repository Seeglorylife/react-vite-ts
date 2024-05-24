/* eslint-disable @typescript-eslint/no-explicit-any */
/** Event Bus通信 */

import { pull } from 'lodash';

export type EventHander<E = any> = (e: E) => void;

class EventEmitter<E = any> {
	private _events: Record<string, EventHander<E>[]>;

	constructor() {
		this._events = {};
	}

	private _getFns(event: string) {
		return this._events[event] || (this._events[event] = []);
	}

	/** 订阅事件 */
	public on<T = E>(event: string, cb: EventHander<T>) {
		const fns = this._getFns(event);
		fns.push(cb as any);
	}

	/** 取消订阅 */
	public off(event: string, cb?: EventHander<E>) {
		if (cb) {
			const fns = this._getFns(event);
			pull(fns, cb);
		} else {
			delete this._events[event];
		}
	}

	/** 一次订阅 */
	public once<T = E>(event: string, cb: EventHander<T>) {
		const fn2: EventHander<E> = (e) => {
			this.off(event, fn2);
			cb(e as any);
		};
		this.on(event, fn2);
	}

	/** 同步调用执行 */
	public emit<T = E>(event: string, payload?: T) {
		const fns = this._getFns(event);
		for (let i = 0; i < fns.length; i++) {
			const fn = fns[i] as EventHander<any>;

			fn(payload);
		}
	}

	public asyncEmit<T = E>(event: string, payload?: T): Promise<any> {
		const fns = this._getFns(event);

		for (let i = 0; i < fns.length; i++) {
			const fn = fns[i] as EventHander<any>;
			return new Promise<any>((resolve) => {
				resolve(fn(payload));
			});
		}
		return Promise.reject();
	}
}

export default EventEmitter;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import EventEmitter, { EventHander } from 'utils/eventEmitter';

const events = new EventEmitter();

export default events;

export function useEventBus<T = any>(event: string, cb: EventHander<T>) {
  useEffect(() => {
    events.on(event, cb);
    return () => events.off(event, cb);
  }, []);
}

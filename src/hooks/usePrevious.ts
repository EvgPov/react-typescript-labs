import { useRef, useEffect } from 'react';

export function usePrevious<T>(prop: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);
  // После рендера сохраняем текущее значение → на следующем рендере оно станет "предыдущим"
  useEffect(() => {
    ref.current = prop;
  }, [prop]);
  // eslint-disable-next-line
  return ref.current;
}

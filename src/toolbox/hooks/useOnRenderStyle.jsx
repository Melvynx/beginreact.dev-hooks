import { useEffect, useRef } from 'react';

export const useOnRenderStyle = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current.classList.add('useOnRenderStyle');
  }, [ref]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.backgroundColor = '#27ae60';

    const timeout = setTimeout(() => {
      if (!ref.current) return;
      ref.current.style.backgroundColor = '';
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  });

  return ref;
};

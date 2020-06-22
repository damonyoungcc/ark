import { useState, useEffect } from 'react';

// 自定义hook，必须使用use开头
// 不同组件公用hook，不会共享内部状态
const useMousePosition = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log('add effect', positions.x);
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', updateMouse);
    return () => {
      console.log('remove effect', positions.x);
      document.removeEventListener('mousemove', updateMouse);
    };
  }, []);
  return positions;
};
export default useMousePosition;

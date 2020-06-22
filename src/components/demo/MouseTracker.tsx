import React, { useState, useEffect } from 'react';
// react会在执行当前effect之前，对上一个effect进行清除
// 传一个空数组，说明effect不依赖props和state中任意值，只执行一次
// 组件卸载的时候，执行remove effect
const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log('add effect', positions.x);
    const updateMouse = (e: MouseEvent) => {
      console.log('inner');
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('click', updateMouse);
    return () => {
      console.log('remove effect', positions.x);
      document.removeEventListener('click', updateMouse);
    };
  }, []);
  console.log('before render', positions.x);
  return (
    <p>
      X: {positions.x}, Y : {positions.y}
    </p>
  );
};

export default MouseTracker;

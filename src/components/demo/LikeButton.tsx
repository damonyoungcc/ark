import React, { useState, useEffect } from 'react';
import useMousePosition from '../hooks/useMousePosition';
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const positions = useMousePosition();
  // 默认情况下，会在第一次和每一次渲染后都执行
  useEffect(() => {
    console.log('doucment title effect is runing');
    document.title = `点击了${like}次`;
  }, [like, on]);
  // 第一次挂载
  return (
    <div>
      <p>
        X: {positions.x}, Y : {positions.y}
      </p>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like} 👍
      </button>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default LikeButton;

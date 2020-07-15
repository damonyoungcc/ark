import React, { FC, useState, useRef, KeyboardEvent, ChangeEvent } from 'react';
import ArkImage from '../../assets/ark.svg';
import GithubImage from '../../assets/github.svg';
import { Icon, Transition } from '../../lib';
import { useClickOutside } from '../../lib';
import './style.scss';
const liItems = ['设计', '文档', '组件', '资源', '目的'];
const App: FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const componentRef = useRef<HTMLDivElement>(null);
  const [selectIndex, setSelectIndex] = useState(2);
  useClickOutside(componentRef, () => {
    setShowInput(false);
    setInputValue('');
  });
  const searchSourceCode = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode !== 13) {
      return;
    }
    if (inputValue.trim()) {
      window.open(`https://github.com/yangdepp/ark/search?q=${inputValue}`);
    }
  };
  return (
    <div className="header-content">
      <div className="header-logo">
        <img src={ArkImage} alt="" className="logo-image" />
        <div>Ark Design</div>
      </div>
      <div className="header-search" ref={componentRef}>
        <Transition
          in={!showInput}
          animation="zoom-in-center-right"
          timeout={0}
        >
          <Icon
            icon="search"
            className="search-icon"
            onClick={() => setShowInput(!showInput)}
          />
        </Transition>
        <Transition
          in={showInput}
          animation="zoom-in-center-left"
          timeout={300}
        >
          <input
            autoFocus={showInput}
            type="text"
            placeholder="在ark源码中搜索"
            className="search-input"
            onKeyDown={searchSourceCode}
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
        </Transition>
      </div>
      <ul className="header-nav">
        {liItems.map((item, index) => (
          <li
            key={item}
            className={`li-item ${index === selectIndex ? 'active' : ''}`}
            onClick={() => setSelectIndex(index)}
          >
            {item}
          </li>
        ))}
        <li
          className="li-item-repo"
          onClick={() => window.open('https://github.com/yangdepp/ark')}
        >
          <img
            alt="GitHub Repo"
            src={GithubImage}
            style={{ width: '20px', marginRight: '5px' }}
          />
          <img
            alt="GitHub package.json version"
            src="https://img.shields.io/github/package-json/v/yangdepp/ark?style=social"
          />
        </li>
      </ul>
    </div>
  );
};

export default App;

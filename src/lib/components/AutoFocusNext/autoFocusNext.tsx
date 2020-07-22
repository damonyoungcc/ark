import React, {
  FC,
  InputHTMLAttributes,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import classNames from 'classnames';
export type AutofocusSize = 'large' | 'middle' | 'small';
export interface AutofocusProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  total?: number;
  onFinish?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  sensitive?: boolean;
  regex?: RegExp;
  size?: AutofocusSize;
  id?: string;
}

const App: FC<AutofocusProps> = (props) => {
  const {
    total = 6,
    onFinish,
    onChange,
    sensitive,
    regex,
    size,
    id,
    ...restProps
  } = props;
  const [inputValue, setInputValue] = useState('');
  const [splitValue, setSplitValue] = useState<string[]>(
    new Array(total).fill(''),
  );
  const [focus, setFocus] = useState(false);
  const [finish, setFinish] = useState(false);
  const [focusIndex, setFocusIndex] = useState(0);
  const defaultId = Date.now();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes(`'`)) {
      return;
    }
    const currentValueList = e.target.value
      .trim()
      .split('')
      .filter((item) => (regex as RegExp).test(item));
    if (currentValueList.length <= total) {
      setInputValue(currentValueList.join(''));
      let labelValueList = [];
      if (sensitive) {
        labelValueList = currentValueList
          .map((item) => (item = '*'))
          .concat(new Array(total - currentValueList.length).fill(''));
        setSplitValue(labelValueList);
      } else {
        setSplitValue(
          currentValueList.concat(
            new Array(total - currentValueList.length).fill(''),
          ),
        );
      }
      if (currentValueList.length < total) {
        setFinish(false);
        setFocusIndex(currentValueList.length);
      } else if (currentValueList.length === total) {
        setFocusIndex(currentValueList.length - 1);
        setFinish(true);
      }
    }

    if (currentValueList.length === total && onFinish) {
      onFinish(e);
    }
    if (onChange) {
      onChange(e);
    }
  };
  const generateLabelClassName = (index: number) =>
    classNames('ark-autofocus-label', {
      'ark-autofocus-label-animate': index === focusIndex && focus,
      [`ark-autofocus-label-${size}`]: size,
      [`ark-autofocus-label-finish`]: finish && index === total - 1,
    });
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode >= 35 && e.keyCode <= 40) {
      e.preventDefault();
    }
  };

  return (
    <>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onKeyDown={handleKeyDown}
        maxLength={total}
        {...restProps}
        id={id ? id : `ark-recode-${defaultId}`}
        value={inputValue}
        onChange={handleChange}
        className="ark-autofocus-input"
      />
      <div className="ark-autofocus-label-wrapper">
        {splitValue.map((item, index) => (
          <label
            htmlFor={id ? id : `ark-recode-${defaultId}`}
            key={index}
            className={generateLabelClassName(index)}
          >
            {item}
          </label>
        ))}
      </div>
    </>
  );
};

App.defaultProps = {
  total: 6,
  sensitive: false,
  regex: /^[A-Za-z0-9]+$/,
  size: 'middle',
};

export default App;

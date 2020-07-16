import React, {
  FC,
  InputHTMLAttributes,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import classNames from 'classnames';

export interface RcodeProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  total?: number;
  onFinish?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  sensitive?: boolean;
  regex?: RegExp;
}

const App: FC<RcodeProps> = (props) => {
  const { total, onFinish, onChange, sensitive, regex, ...restProps } = props;
  const [inputValue, setInputValue] = useState('');
  const [splitValue, setSplitValue] = useState<string[]>(
    new Array(total).fill(''),
  );
  const [focus, setFocus] = useState(false);
  const [focusIndex, setFocusIndex] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes(`'`)) {
      return;
    }
    const currentValueList = e.target.value
      .trim()
      .split('')
      .filter((item) => (regex as RegExp).test(item));
    if (currentValueList.length <= (total as number)) {
      setInputValue(currentValueList.join(''));
      let labelValueList = [];
      if (sensitive) {
        labelValueList = currentValueList
          .map((item) => (item = '*'))
          .concat(
            new Array((total as number) - currentValueList.length).fill(''),
          );
        setSplitValue(labelValueList);
      } else {
        setSplitValue(
          currentValueList.concat(
            new Array((total as number) - currentValueList.length).fill(''),
          ),
        );
      }
      setFocusIndex(currentValueList.length);
    }

    if (currentValueList.length === total && onFinish) {
      onFinish(e);
    }
    if (onChange) {
      onChange(e);
    }
  };
  const generateLabelClassName = (index: number) =>
    classNames('ark-rcode-label', {
      'ark-rcode-label-animate': index === focusIndex && focus,
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
        id="rcode"
        value={inputValue}
        onChange={handleChange}
        className="ark-rcode-input"
      />
      <div className="ark-rcode-label-wrapper">
        {splitValue.map((item, index) => (
          <label
            htmlFor="rcode"
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
};

export default App;

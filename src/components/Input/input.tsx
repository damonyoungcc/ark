import React, { ReactElement, InputHTMLAttributes, FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import Icon from '../Icon/icon';

export type InputSize = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**是否禁用Input */
  disabled?: boolean;
  /**Input框的大小 lg大 sm小 */
  size?: InputSize;
  /**Input框右边添加一个图标 */
  icon?: IconProp;
  /**前缀，可传入一个字符串或者ReactElement */
  prepend?: String | ReactElement;
  /**后缀，可传入一个字符串或者ReactElement */
  append?: String | ReactElement;
}

export const Input: FC<InputProps> = (props) => {
  const { children, className, size, icon, prepend, append, disabled, style, ...restProps } = props;
  const classes = classNames('ark-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': append,
    'input-group-prepend': prepend,
  });
  return (
    <div className={classes} style={style}>
      {prepend && <div className="ark-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className="ark-input-inner" disabled={disabled} {...restProps} />
      {append && <div className="ark-input-group-append">{append}</div>}
    </div>
  );
};

export default Input;

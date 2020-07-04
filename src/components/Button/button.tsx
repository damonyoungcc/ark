import React, { FC, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  /**自定义Button的类名 */
  className?: string;
  /**设置Button的禁用 */
  disabled?: boolean;
  /**设置Button的大小 */
  size?: ButtonSize;
  /**设置Button的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  /**当btnType是链接时，设置跳转的路径 */
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, children, href, className, ...restProps } = props;
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;

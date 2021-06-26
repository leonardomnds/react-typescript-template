import { ButtonHTMLAttributes } from 'react';
import classes from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest} type="button" className={classes.button()}>
      {children}
    </button>
  );
};

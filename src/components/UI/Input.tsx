import Styles from './style/Input';
import React, { ReactNode } from 'react';

interface Props {
  input: {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
  };
  label: ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <Styles.Input>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </Styles.Input>
  );
});

export default Input;

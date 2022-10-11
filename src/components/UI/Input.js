import React from 'react';
import Styles from './style/Input';

const Input = React.forwardRef((props, ref) => {
  return (
    <Styles.Input>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </Styles.Input>
  );
});

export default Input;

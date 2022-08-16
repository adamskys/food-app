import Styles from './style/Input';

const Input = (props) => {
  return (
    <Styles.Input>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </Styles.Input>
  );
};

export default Input;

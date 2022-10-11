import React, { useRef, useState } from 'react';

import Styles from './style/Checkout';

export interface CheckoutProps {
  onConfirm: ({}) => void;
  onCancel: () => void;
  name?: string;
  street?: string;
  city?: string;
  postCode?: string;
}

const isEmpty = (value: string) => value.trim() === '';
const isFiveChars = (value: string) => value.trim().length === 5;

const Checkout: React.FC<CheckoutProps> = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postCode: true,
  });

  // do I have to set value to null? if so do I have to use ?/! operator at current?
  const nameInputRef = useRef<HTMLInputElement>();
  const streetInputRef = useRef<HTMLInputElement>();
  const postCodeInputRef = useRef<HTMLInputElement>();
  const cityInputRef = useRef<HTMLInputElement>();

  const confirmHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostCode = postCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostCodeIsValid = isFiveChars(enteredPostCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postCode: enteredPostCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postCode: enteredPostCode,
    });
  };

  return (
    <Styles.Form onSubmit={confirmHandler}>
      <Styles.Control invalid={!formInputsValidity.name}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </Styles.Control>
      <Styles.Control invalid={!formInputsValidity.street}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </Styles.Control>
      <Styles.Control invalid={!formInputsValidity.postCode}>
        <label htmlFor="postal">Post code</label>
        <input type="text" id="postal" ref={postCodeInputRef} />
        {!formInputsValidity.postCode && (
          <p>Please enter a valid post code(5 characters long)!</p>
        )}
      </Styles.Control>
      <Styles.Control invalid={!formInputsValidity.city}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </Styles.Control>
      <Styles.Actions>
        <Styles.Button type="button" onClick={props.onCancel}>
          Cancel
        </Styles.Button>
        <Styles.SubmitButton>Confirm</Styles.SubmitButton>
      </Styles.Actions>
    </Styles.Form>
  );
};

export default Checkout;

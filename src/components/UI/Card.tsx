import React from 'react';
import Styles from './style/Card';

const Card: React.FC<{ children: React.ReactNode }> = (props) => {
  return <Styles.Card>{props.children}</Styles.Card>;
};

export default Card;

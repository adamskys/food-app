import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import Styles from './style/HeaderCartButton';

interface Props {
  onShowCartHandler: () => void;
}

const HeaderCartButton: React.FC<Props> = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${btnHighlight ? 'bump' : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlight(true);

    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Styles.StyledButton
      className={btnClasses}
      onClick={props.onShowCartHandler}
    >
      <Styles.Icon>
        <CartIcon />
      </Styles.Icon>
      <span></span>
      <Styles.Badge>{numberOfCartItems}</Styles.Badge>
    </Styles.StyledButton>
  );
};

export default HeaderCartButton;

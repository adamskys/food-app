import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import { StyledButton, Icon, Badge } from './style/HeaderCartButton';

const HeaderCartButton = (props) => {
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
    <StyledButton className={btnClasses} onClick={props.onClick}>
      <Icon>
        <CartIcon />
      </Icon>
      <span></span>
      <Badge>{numberOfCartItems}</Badge>
    </StyledButton>
  );
};

export default HeaderCartButton;

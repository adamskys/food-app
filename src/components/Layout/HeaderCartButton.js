import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import { StyledButton, Icon, Badge } from './style/HeaderCartButton';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <StyledButton onClick={props.onClick}>
      <Icon>
        <CartIcon />
      </Icon>
      <span></span>
      <Badge>{numberOfCartItems}</Badge>
    </StyledButton>
  );
};

export default HeaderCartButton;

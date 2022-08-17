import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Styles from './style/Cart';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <Styles.cartItem>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </Styles.cartItem>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <Styles.TotalSection>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </Styles.TotalSection>
      <Styles.Actions>
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </Styles.Actions>
    </Modal>
  );
};

export default Cart;

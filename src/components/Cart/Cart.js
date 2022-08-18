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
    <Styles.CartItem>
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
    </Styles.CartItem>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <Styles.TotalSection>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </Styles.TotalSection>
      <Styles.Actions>
        <Styles.ButtonClose onClick={props.onClose}>Close</Styles.ButtonClose>
        {hasItems && <Styles.ButtonOrder>Order</Styles.ButtonOrder>}
      </Styles.Actions>
    </Modal>
  );
};

export default Cart;

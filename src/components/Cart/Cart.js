import Modal from '../UI/Modal';
import Styles from './style/Cart';

const Cart = (props) => {
  const cartItems = (
    <Styles.cartItem>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: '12.99' }].map((item) => (
        <li>{item.name}</li>
      ))}
    </Styles.cartItem>
  );

  return (
    <Modal>
      {cartItems}
      <Styles.TotalSection>
        <span>Total amount</span>
        <span>35.62</span>
      </Styles.TotalSection>
      <Styles.Actions>
        <button className="button--alt">Close</button>
        <button className="button">Order</button>
      </Styles.Actions>
    </Modal>
  );
};

export default Cart;

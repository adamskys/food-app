import { useContext, useState } from 'react';

import { Modal } from '@mui/material';
import CartItem from './CartItem';
import Styles from './style/Cart';
import ModalStyles from '../UI/style/Modal';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import { postData } from '../../util/api';
import { CartItemType } from '../../typings';
import { CheckoutProps } from './Checkout';

interface CartProps {
  open: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item: CartItemType) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData: CheckoutProps) => {
    setIsSubmitting(true);

    const responseData = await postData('orders', {
      user: userData,
      orderedItems: cartContext.items,
    });

    setIsSubmitting(false);
    setDidSubmit(true);
    cartContext.clearCart();
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

  const modalActions = (
    <Styles.Actions>
      <Styles.ButtonClose onClick={props.onClose}>Close</Styles.ButtonClose>
      {hasItems && (
        <Styles.ButtonOrder onClick={orderHandler}>Order</Styles.ButtonOrder>
      )}
    </Styles.Actions>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <Styles.TotalSection>
        <span>Total amount</span>
        <span data-testid="amount-span">
          {!hasItems ? '$0.00' : totalAmount}
        </span>
      </Styles.TotalSection>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <Styles.Actions>
        <Styles.ButtonClose onClick={props.onClose}>Close</Styles.ButtonClose>
      </Styles.Actions>
    </>
  );

  return (
    <Modal data-testid="modal" open={props.open} onClose={props.onClose}>
      <ModalStyles.Modal>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModalContent}
        {!isSubmitting && didSubmit && didSubmitModalContent}
      </ModalStyles.Modal>
    </Modal>
  );
};

export default Cart;

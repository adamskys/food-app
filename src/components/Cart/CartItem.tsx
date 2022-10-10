import Styles from './style/CartItem';

interface Props {
  price: number;
  name: string;
  amount: number;
  onRemove: () => void;
  onAdd: () => void;
}

const CartItem: React.FC<Props> = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;

  return (
    <Styles.CartItem>
      <div>
        <h2>{props.name}</h2>
        <Styles.Summary>
          <Styles.Price>{formattedPrice}</Styles.Price>
          <Styles.Amount>x {props.amount}</Styles.Amount>
        </Styles.Summary>
      </div>
      <Styles.Actions>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </Styles.Actions>
    </Styles.CartItem>
  );
};

export default CartItem;

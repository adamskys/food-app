import { useContext } from 'react';

import Styles from './style/MealItem';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

interface MealItemType {
  meal: {
    id: string;
    name: string;
    description: string;
    price: number;
  };
}

const MealItem: React.FC<MealItemType> = ({
  meal: { id, name, description, price },
}) => {
  const cartContext = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    cartContext.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <Styles.MealItem>
      <div>
        <h3>{name}</h3>
        <Styles.DescriptionDiv>{description}</Styles.DescriptionDiv>
        <Styles.PriceDiv>{formattedPrice}</Styles.PriceDiv>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </Styles.MealItem>
  );
};

export default MealItem;

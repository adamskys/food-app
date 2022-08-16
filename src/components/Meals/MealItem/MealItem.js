import Styles from './style/MealItem';
import MealItemForm from './MealItemForm';

const MealItem = ({ meal: { id, name, description, price } }) => {
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <Styles.MealItem>
      <div>
        <h3>{name}</h3>
        <Styles.DescriptionDiv>{description}</Styles.DescriptionDiv>
        <Styles.PriceDiv>{formattedPrice}</Styles.PriceDiv>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </Styles.MealItem>
  );
};

export default MealItem;

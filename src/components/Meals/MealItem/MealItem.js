import Styles from './style/MealItem';

const MealItem = ({ meal: { name, description, price } }) => {
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <Styles.MealItem>
      <div>
        <h3>{name}</h3>
        <Styles.DescriptionDiv>{description}</Styles.DescriptionDiv>
        <Styles.PriceDiv>{formattedPrice}</Styles.PriceDiv>
      </div>
      <div></div>
    </Styles.MealItem>
  );
};

export default MealItem;

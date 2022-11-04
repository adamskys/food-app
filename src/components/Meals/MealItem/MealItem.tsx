import { useContext, useState } from 'react';

import Styles from './style/MealItem';
import MealItemForm from './MealItemForm';
import Rating from './Rating';
import CartContext from '../../../store/cart-context';
import ReactStars from 'react-stars';

export interface MealItemType {
  meal: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    rating: number;
    nrOfVotes: number;
  };
}

const MealItem: React.FC<MealItemType> = ({
  meal: { id, name, description, price, rating, nrOfVotes },
}) => {
  const cartContext = useContext(CartContext);
  const [ratingShown, setRatingShown] = useState(false);
  const [currentRating, setCurrentRating] = useState(rating);
  const [currentVotes, setCurrentVotes] = useState(nrOfVotes);

  const formattedPrice = `$${price.toFixed(2)}`;
  const formattedRating = currentRating.toFixed(2);

  const hideRatingHandler = () => {
    setRatingShown(false);
  };

  const addToCartHandler = (amount: number) => {
    cartContext.addItem({
      id,
      name,
      amount,
      price,
      rating,
      nrOfVotes,
    });
  };

  const StarRating = () => {
    return <ReactStars value={currentRating} edit={false} />;
  };

  return (
    <Styles.MealItem data-testid="meal-item">
      <div>
        <h3>{name}</h3>
        <Styles.DescriptionDiv>{description}</Styles.DescriptionDiv>
        <Styles.PriceDiv>{formattedPrice}</Styles.PriceDiv>
        <Styles.StarComponent
          data-testid="star-rating"
          onClick={() => setRatingShown(true)}
        >
          <StarRating />
          <Styles.Rating>{formattedRating}</Styles.Rating>
          <Styles.Votes>({currentVotes})</Styles.Votes>
        </Styles.StarComponent>

        <Rating
          id={id}
          name={name}
          description={description}
          nrOfVotes={nrOfVotes}
          rating={rating}
          setCurrentRating={setCurrentRating}
          setCurrentVotes={setCurrentVotes}
          hideRatingHandler={hideRatingHandler}
          open={ratingShown}
        />
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </Styles.MealItem>
  );
};

export default MealItem;

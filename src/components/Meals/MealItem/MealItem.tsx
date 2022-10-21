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
    // console.log('Str ratting > ', typeof rating);
    return <ReactStars value={rating} edit={false} />;
  };

  // Ideally you need both authentication and order history - but we'll get back to this

  // List of requirements
  // 1) When looking a list of meals I can see their rating (nr of stars) STAR 3.5/5()
  // 2) When looking a list of meals I can see how many people have rated each meal
  // 3) When clicking on the stars I'll get a modal allowing me to cast my rating
  // 4) After rating a meal - the number of stars filled/unfilled will be updated
  // 5) After rating a meal - the number of votes on that meal will be update (+1)

  // Bonus: As a user I want to be able to vote on a meal just once (either based on my account - logged in use or IP address)
  // Bonus of a bonus: I can only vote on a meal that is in my order history (of a specific user/needs authentication)
  return (
    <Styles.MealItem>
      <div>
        <h3>{name}</h3>
        <Styles.DescriptionDiv>{description}</Styles.DescriptionDiv>
        <Styles.PriceDiv>{formattedPrice}</Styles.PriceDiv>
        <Styles.StarComponent onClick={() => setRatingShown(true)}>
          <StarRating />
          <Styles.Rating>{formattedRating}</Styles.Rating>
          <Styles.Votes>({nrOfVotes})</Styles.Votes>
        </Styles.StarComponent>
        {ratingShown && (
          <Rating
            id={id}
            name={name}
            nrOfVotes={nrOfVotes}
            rating={rating}
            hideRatingHandler={hideRatingHandler}
            setCurrentRating={setCurrentRating}
            setCurrentVotes={setCurrentVotes}
          />
        )}
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </Styles.MealItem>
  );
};

export default MealItem;

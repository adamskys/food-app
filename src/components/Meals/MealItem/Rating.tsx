import { useContext, useState } from 'react';

import Modal from '../../UI/Modal';
import { patchData, postData } from '../../../util/api';
import Styles from './style/Rating';
import ReactStars from 'react-stars';

interface RatingProps {
  hideRatingHandler: () => void;
  id: string;
  name: string;
  nrOfVotes: number;
  rating: number;
  onClick?: ({}) => void;
  setCurrentRating: (r: number) => void;
  setCurrentVotes: (v: number) => void;
}

const Rating: React.FC<RatingProps> = ({
  hideRatingHandler,
  id,
  name,
  rating,
  nrOfVotes,
  setCurrentRating,
  setCurrentVotes,
}) => {
  const [newRating, setNewRating] = useState(0);

  const StarRating = () => {
    return (
      <ReactStars
        value={newRating}
        size={30}
        onChange={(newRating: number) => {
          setNewRating(newRating);
        }}
      />
    );
  };

  const MealName = () => {
    return <Styles.MealName>{name}</Styles.MealName>;
  };

  const submitRatingHandler = async () => {
    const newVotes = nrOfVotes + 1;
    const calculateRating = () => {
      const finalRating = (rating * nrOfVotes + newRating) / newVotes;
      setCurrentRating(finalRating);
      setCurrentVotes(newVotes);
      return finalRating;
    };

    const responseData = await patchData('meals', id, {
      nrOfVotes: newVotes,
      rating: calculateRating(),
    });
    hideRatingHandler();
  };

  return (
    <Modal onClose={hideRatingHandler}>
      <>
        <MealName />
        <Styles.StarWrapper>
          <StarRating />
        </Styles.StarWrapper>
        <Styles.ButtonClose onClick={hideRatingHandler}>
          Close
        </Styles.ButtonClose>
        <Styles.ButtonSubmit onClick={submitRatingHandler}>
          Confirm
        </Styles.ButtonSubmit>
      </>
    </Modal>
  );
};

export default Rating;

import { useState } from 'react';
import { Modal } from '@mui/material';
import ModalStyles from '../../UI/style/Modal';
import { patchData } from '../../../util/api';
import Styles from './style/Rating';

import ReactStars from 'react-stars';

interface RatingProps {
  hideRatingHandler: () => void;
  id: string;
  name: string;
  description: string;
  nrOfVotes: number;
  rating: number;
  onClick?: ({}) => void;
  setCurrentRating: (r: number) => void;
  setCurrentVotes: (v: number) => void;
  open: boolean;
}

const Rating: React.FC<RatingProps> = ({
  hideRatingHandler,
  id,
  name,
  description,
  rating,
  nrOfVotes,
  setCurrentRating,
  setCurrentVotes,
  open,
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
    return (
      <Styles.MealName>
        Vote for: {name}
        <Styles.MealDesc>{description}</Styles.MealDesc>
      </Styles.MealName>
    );
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
    <Modal data-testid="rating-modal" open={open} onClose={hideRatingHandler}>
      <ModalStyles.Modal>
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
      </ModalStyles.Modal>
    </Modal>
  );
};

export default Rating;

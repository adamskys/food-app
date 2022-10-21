import styled from '@emotion/styled';

const MealItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  & h3 {
    margin: 0 0 0.25rem 0;
  }
`;

const DescriptionDiv = styled.div`
  font-style: italic;
  color: #373737;
`;

const PriceDiv = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #f55951;
  font-size: 1.25rem;
`;

const StarComponent = styled.section`
  display: flex;
  cursor: default;
`;

const Rating = styled.span`
  font-weight: bold;
  margin-left: 0.2rem;
`;

const Votes = styled.span`
  display: flex;
  align-items: center;
  margin-left: 0.1rem;
  font-size: 0.8rem;
  color: #666;
`;

export default {
  MealItem,
  DescriptionDiv,
  PriceDiv,
  StarComponent,
  Rating,
  Votes,
};

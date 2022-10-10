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

export default { MealItem, DescriptionDiv, PriceDiv };

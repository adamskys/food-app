import styled from '@emotion/styled';

const StarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MealName = styled.h3`
  text-align: center;
  margin: 1rem;
`;

const Button = styled.button`
  float: right;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #f55951;
  padding: 0.5rem 2rem;
  border-radius: 12px;
  margin: 2rem 1rem 0 0;

  &:hover,
  &:active {
    background-color: #c9554f;
    border-color: #c9554f;
    color: white;
  }
`;

const ButtonClose = styled(Button)`
  color: #f55951;
`;

const ButtonSubmit = styled(Button)`
  background-color: #f55951;
  color: white;

  & button:hover,
  & button:active {
    background-color: #c9554f;
    border-color: #c9554f;
    color: white;
`;

export default { StarWrapper, MealName, ButtonClose, ButtonSubmit };

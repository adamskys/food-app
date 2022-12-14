import styled from '@emotion/styled';

const CartItem = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Actions = styled.div`
  text-align: right;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #f55951;
  padding: 0.5rem 2rem;
  border-radius: 12px;
  margin-left: 1rem;

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

const ButtonOrder = styled(Button)`
  background-color: #f55951;
  color: white;

  & button:hover,
  & button:active {
    background-color: #c9554f;
    border-color: #c9554f;
    color: white;
`;

export default {
  CartItem,
  TotalSection,
  Actions,
  Button,
  ButtonClose,
  ButtonOrder,
};

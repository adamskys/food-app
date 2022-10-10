import styled from '@emotion/styled';

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f55951;
  padding: 1rem 0;
  margin: 1rem 0;

  & h2 {
    margin: 0 0 0.5rem 0;
    color: #363636;
  }

  & button {
    font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: #f55951;
    border: 1px solid #f55951;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;
  }

  & button:hover,
  & button:active {
    background-color: #c9554f;
    border-color: #c9554f;
    color: white;
  }
`;

const Summary = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  color: #f55951;
`;

const Amount = styled.span`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: #363636;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default { CartItem, Summary, Price, Amount, Actions };

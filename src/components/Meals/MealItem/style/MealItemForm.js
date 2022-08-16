import styled from '@emotion/styled';

const Form = styled.form`
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: #f55951;
    border: 1px solid #f55951;
    color: white;
    padding: 0.25rem 1rem;
    border-radius: 10px;
    font-weight: bold;
  }

  & button:hover,
  & button:active {
    background-color: #c9554f;
    border-color: #c9554f;
  }
`;

export default { Form };

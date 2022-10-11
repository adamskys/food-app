import styled from '@emotion/styled';

// interface StyledProps {
// theme: Theme;
// }
type ComponentProps = { invalid?: boolean };

const Form = styled.form`
  margin: 1rem 0;
  width: 100%;
  height: 19rem;
  overflow: scroll;
`;

const Control = styled.div`
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  & input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
  }

  ${({ invalid }: ComponentProps) =>
    invalid
      ? ` & label {
          color: #ca3e51;
        }
    
        & input {
          border-color: #aa0b20;
          background-color: #ffeff1;
        }
    
        & p {
          color: #ca3e51;
        }`
      : ''};
`;
const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  font: inherit;
  color: #f55951;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 2rem;

  &:hover,
  &:active {
    background-color: #ffe6dc;
  }
`;

const SubmitButton = styled(Button)`
  border: 1px solid #f55951;
  background-color: #f55951;
  color: white;

  &:hover,
  &:active {
    background-color: #c9554f;
  }
`;

export default { Form, Control, Actions, Button, SubmitButton };

// .invalid label {
//   color: #ca3e51;
// }

// .invalid input {
//   border-color: #aa0b20;
//   background-color: #ffeff1;
// }

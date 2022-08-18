import styled from '@emotion/styled/macro';

const StyledButton = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #ab453f;
  color: white;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #7a3430;
  }

  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

const Icon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

const Badge = styled.span`
  background-color: #f55951;
  padding: 0.1rem 0.5rem;
  border-radius: 10px;
  // margin-left: 1rem;
  font-weight: bold;

  ${StyledButton}:hover &,
  ${StyledButton}:active & {
    background-color: #c9554f;
  }
`;

export default { StyledButton, Icon, Badge };

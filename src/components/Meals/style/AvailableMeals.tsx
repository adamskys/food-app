import styled from '@emotion/styled';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const MealsSection = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MealsLoading = styled.section`
  text-align: center;
  color: white;
`;

const MealsError = styled.section`
  text-align: center;
  color: red;
`;

const SortButton = styled.button`
  float: right;
  font: inherit;
  cursor: pointer;
  background-color: #f55951;
  border: 1px solid #f55951;
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 10px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #c9554f;
    border-color: #c9554f;
  }
`;

export default { MealsSection, MealsLoading, MealsError, SortButton };

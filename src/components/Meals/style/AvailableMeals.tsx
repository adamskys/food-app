import styled from '@emotion/styled';

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

export default { MealsSection, MealsLoading, MealsError };
import { StyledHeader, ImgContainer } from './style/Header';
import HeaderCartButton from './HeaderCartButton';

import mealsImg from '../../assets/dinner.jpeg';

const Header = (props) => {
  return (
    <>
      <StyledHeader>
        <h1>Food App</h1>
        <HeaderCartButton />
      </StyledHeader>
      <ImgContainer>
        <img src={mealsImg} alt="A table full of food" />
      </ImgContainer>
    </>
  );
};

export default Header;

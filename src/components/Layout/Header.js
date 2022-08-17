import { StyledHeader, ImgContainer, LogoContainer } from './style/Header';
import HeaderCartButton from './HeaderCartButton';

import logoImg from './../../assets/take-away.png';
import mealsImg from '../../assets/dinner.jpeg';

const Header = (props) => {
  return (
    <>
      <StyledHeader>
        <LogoContainer>
          <img src={logoImg} />
        </LogoContainer>
        <HeaderCartButton onClick={props.onShowCart} />
      </StyledHeader>
      <ImgContainer>
        <img src={mealsImg} alt="A table full of food" />
      </ImgContainer>
    </>
  );
};

export default Header;

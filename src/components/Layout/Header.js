import Styles from './style/Header';
import HeaderCartButton from './HeaderCartButton';

import logoImg from './../../assets/take-away.png';
import mealsImg from '../../assets/dinner.jpeg';

const Header = (props) => {
  return (
    <>
      <Styles.Header>
        <Styles.LogoContainer>
          <img src={logoImg} />
        </Styles.LogoContainer>
        <HeaderCartButton onClick={props.onShowCart} />
      </Styles.Header>
      <Styles.ImgContainer>
        <img src={mealsImg} alt="A table full of food" />
      </Styles.ImgContainer>
    </>
  );
};

export default Header;

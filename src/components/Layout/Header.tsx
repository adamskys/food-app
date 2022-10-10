import { useState } from 'react';

import Styles from './style/Header';
import HeaderCartButton from './HeaderCartButton';
import Cart from '../Cart/Cart';

import logoImg from './../../assets/take-away.png';
import mealsImg from '../../assets/dinner.jpeg';

const Header: React.FC = () => {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <>
      <Styles.Header>
        <Styles.LogoContainer>
          <img src={logoImg} />
        </Styles.LogoContainer>
        <HeaderCartButton onShowCartHandler={showCartHandler} />
        {cartShown && <Cart onClose={hideCartHandler} />}
      </Styles.Header>
      <Styles.ImgContainer>
        <img src={mealsImg} alt="A table full of food" />
      </Styles.ImgContainer>
    </>
  );
};

export default Header;

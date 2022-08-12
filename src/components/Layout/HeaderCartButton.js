import CartIcon from '../Cart/CartIcon';
import { StyledButton, Icon, Badge } from './style/HeaderCartButton';

const HeaderCartButton = (props) => {
  return (
    <StyledButton>
      <Icon>
        <CartIcon />
      </Icon>
      <span></span>
      <Badge>3</Badge>
    </StyledButton>
  );
};

export default HeaderCartButton;

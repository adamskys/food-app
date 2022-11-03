import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import CartContext from '../../store/cart-context';

describe('Header component', () => {
  it('Check if HeaderCartButton contains an icon', () => {
    render(<Header />);
    const headerCartButton = screen.getByTestId('header-cart-button');
    const headerCartIcon = screen.getByTestId('header-cart-icon');

    expect(headerCartButton).toBeInTheDocument();
    expect(headerCartIcon).toBeInTheDocument();
  });

  const cartContextMock = {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {},
  };

  const renderCartItems = (providerProps) => {
    return render(
      <CartContext.Provider value={{ ...cartContextMock, ...providerProps }}>
        <Header />
      </CartContext.Provider>
    );
  };

  it('Check if cart badge is displaying 0 initially', () => {
    renderCartItems();
    const headerCartBadge = screen.getByTestId('header-cart-badge');
    expect(headerCartBadge).toHaveTextContent('0');
  });

  it('Check if cart badge is reflecting items in the cart', () => {
    const providerProps = {
      items: [
        { id: 'm1', amount: 2 },
        { id: 'm2', amount: 3 },
      ],
    };
    renderCartItems(providerProps);
    const headerCartBadge = screen.getByTestId('header-cart-badge');
    expect(headerCartBadge).toHaveTextContent('5');
  });

  it('Check if modal initially contains no value', async () => {
    render(<Header />);
    const trigger = screen.getByTestId('header-cart-button');
    fireEvent.click(trigger);
    await waitFor(() => screen.getByTestId('modal'));
    const amount = screen.getByTestId('amount-span');
    expect(amount).toHaveTextContent('$0.00');
    // expect(screen.getByRole('button', { name: 'Order' })).not.toBeVisible();
  });

  const providerProps = {
    items: [{ id: 'm1', amount: 1, name: 'Sushi', price: 14.99 }],
    totalAmount: 14.99,
  };
  it('Check if modal contains items - total amount exists and order button is falsy', async () => {
    renderCartItems(providerProps);
    const trigger = screen.getByTestId('header-cart-button');
    fireEvent.click(trigger);
    await waitFor(() => screen.getByTestId('modal'));
    const amount = screen.getByTestId('amount-span');
    expect(amount).toHaveTextContent('$' + providerProps.totalAmount);
  });
  it('Check if any - or + button exists when there are items', async () => {
    renderCartItems(providerProps);
    const trigger = screen.getByTestId('header-cart-button');
    fireEvent.click(trigger);
    await waitFor(() => screen.getByTestId('modal'));
    const button = screen.getByRole('button', { name: '+' });
  });
});

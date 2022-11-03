import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();
import {
  render,
  act,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import '@testing-library/jest-dom';
import AvailableMeals from '../Meals/AvailableMeals';

const data = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'with baked salmon',
    price: 14.99,
    category: 'lunch',
    rating: 3.6666666666666665,
    nrOfVotes: 6,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'with potatoes, pecorino, asparagus and radish',
    price: 16.5,
    category: 'dinner',
    rating: 4.196774193548387,
    nrOfVotes: 31,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'with tomato, onion and pickles',
    price: 12.99,
    category: 'lunch',
    rating: 3.4680851063829787,
    nrOfVotes: 47,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'with fresh rice, vegetables and mango',
    price: 18.99,
    category: 'lunch',
    rating: 3.5,
    nrOfVotes: 17,
  },
  {
    id: 'm5',
    name: 'Buttermilk Pancakes',
    description: 'with bacon or maple syrup',
    price: 8.99,
    category: 'breakfast',
    rating: 3.735294117647059,
    nrOfVotes: 17,
  },
  {
    id: 'm6',
    name: 'Belgian Waffle',
    description: 'with seasonal fruits and whipped cream',
    price: 9.99,
    category: 'breakfast',
    rating: 2.449056603773585,
    nrOfVotes: 53,
  },
  {
    id: 'm7',
    name: 'Lumberjack Omelet',
    description: 'with ham, sausage, spinach, mushrooms and cheddar',
    price: 10.99,
    category: 'breakfast',
    rating: 4.205970149253732,
    nrOfVotes: 134,
  },
  {
    id: 'm8',
    name: 'Cherrywood roasted salmon',
    description: 'with cauliflower puree, almonds & leeks, sour orange sauce',
    price: 19.99,
    category: 'dinner',
    rating: 3,
    nrOfVotes: 314,
  },
  {
    id: 'm9',
    name: 'Pork belly confit',
    description: 'with cheddar grits, sweet onions & cherry barbecue sauce',
    price: 22.99,
    category: 'dinner',
    rating: 4.546666666666666,
    nrOfVotes: 18,
  },
];

describe('Meals component', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('Call api and return data', async () => {
    fetch.mockResponseOnce(JSON.stringify(data));
    await act(async () => {
      render(<AvailableMeals />);
    });
    const availableMeals = screen.getByTestId('available-meals-list');
    expect(availableMeals).not.toContainHTML('<p>No meals were found.</p>');
    //check by name/price instead of paragraph
  });
  it('Return meals not found in case there is no data', async () => {
    fetch.mockResponseOnce(JSON.stringify({}));
    await act(async () => {
      render(<AvailableMeals />);
    });
    const availableMeals = screen.getByTestId('available-meals-list');
    expect(availableMeals).toHaveTextContent('No meals were found.');
  });
  it('Test if modal is opening after clicking the stars', async () => {
    fetch.mockResponseOnce(JSON.stringify(data));
    await act(async () => {
      render(<AvailableMeals />);
    });
    const starRating = screen.queryAllByTestId('star-rating');
    fireEvent.click(starRating[0]);
    const modal = await waitFor(() => screen.getByTestId('rating-modal'));
    expect(modal).toBeInTheDocument();
  });
});

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import MealsSection from './style/AvailableMeals';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      //1. one prop approach
      meal={meal}
      //2. many props approach
      // name={meal.name}
      // description={meal.description}
      // price={meal.price}
    />
  ));

  return (
    <MealsSection>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </MealsSection>
  );
};

export default AvailableMeals;

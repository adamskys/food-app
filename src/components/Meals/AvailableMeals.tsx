import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import Styles from './style/AvailableMeals';
import { getData } from '../../util/api';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      const responseData = await getData('meals');

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(true);
    });
  }, []);

  if (isLoading) {
    return (
      <Styles.MealsLoading>
        <p>Loading...</p>
      </Styles.MealsLoading>
    );
  }

  if (httpError) {
    return (
      <Styles.MealsError>
        <p>Something went wrong. Please refresh the page.</p>
      </Styles.MealsError>
    );
  }

  const mealsList = meals.map((meal) => (
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
    <Styles.MealsSection>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </Styles.MealsSection>
  );
};

export default AvailableMeals;

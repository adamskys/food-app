import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import Styles from './style/AvailableMeals';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-http-32e65-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

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
      setHttpError(error.message);
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
        <p>{httpError}</p>
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

import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import Styles from './style/AvailableMeals';
import { getData } from '../../util/api';
import { mealCategoryByDayTime } from '../../util/meals';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [sortType, setSortType] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(
    mealCategoryByDayTime()
  );

  const CATEGORIES: { BREAKFAST: string; LUNCH: string; DINNER: string } = {
    BREAKFAST: 'breakfast',
    LUNCH: 'lunch',
    DINNER: 'dinner',
  };

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
          category: responseData[key].category,
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

  // renaming ex: mealByCategory -> listedMeals
  // another parameter which is mentioning sorting order
  // based on sort order you will sort available meals by price
  // after having the list of sortMeals you render the list
  const listedMeals = (category: string) => {
    const categoryMeals = meals
      .filter((meal) => meal.category === category)
      .map((meal) => <MealItem key={meal.id} meal={meal} />);
    if (categoryMeals.length > 0) return categoryMeals;
    else return <p>No meals were found.</p>;
  };

  // add event listeners on the tabs => that will trigger changing the sorting order
  // for that category

  // another approach (super optional) - combined state including both active tab
  // and sorting order for that tab

  return (
    <Styles.MealsSection>
      <Card>
        <Tabs
          selectedIndex={activeCategoryIndex}
          onSelect={(index) => setActiveCategoryIndex(index)}
        >
          <TabList>
            <Tab>Breakfast</Tab>
            <Tab>Lunch</Tab>
            <Tab>Dinner</Tab>
          </TabList>
          <TabPanel>
            <ul>{listedMeals(CATEGORIES.BREAKFAST)}</ul>
          </TabPanel>
          <TabPanel>
            <ul>{listedMeals(CATEGORIES.LUNCH)}</ul>
          </TabPanel>
          <TabPanel>
            <ul>{listedMeals(CATEGORIES.DINNER)}</ul>
          </TabPanel>
        </Tabs>
      </Card>
    </Styles.MealsSection>
  );
};

export default AvailableMeals;

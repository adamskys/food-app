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
  const [sortType, setSortType] = useState(true);
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
  const listedMeals = (category: string, sort: boolean) => {
    const sortedMeals = meals.filter((meal) => meal.category === category);
    if (sort) {
      sortedMeals.sort((meal1, meal2) => meal1.price - meal2.price);
    } else {
      sortedMeals.sort((meal1, meal2) => meal2.price - meal1.price);
    }
    let renderedMeals = sortedMeals.map((meal) => (
      <MealItem key={meal.id} meal={meal} />
    ));
    if (renderedMeals.length > 0) return renderedMeals;
    else return <p>No meals were found.</p>;
  };

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
            <Styles.SortButton onClick={() => setSortType(!sortType)}>
              Sort {!sortType ? 'Ascending' : 'Descending'}
            </Styles.SortButton>
          </TabList>
          <TabPanel>
            <ul>{listedMeals(CATEGORIES.BREAKFAST, sortType)}</ul>
          </TabPanel>
          <TabPanel>
            <ul>{listedMeals(CATEGORIES.LUNCH, sortType)}</ul>
          </TabPanel>
          <TabPanel>
            <ul>{listedMeals(CATEGORIES.DINNER, sortType)}</ul>
          </TabPanel>
        </Tabs>
      </Card>
    </Styles.MealsSection>
  );
};

export default AvailableMeals;

import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import Styles from './style/AvailableMeals';
import { getData } from '../../util/api';
import { mealCategoryByDayTime } from '../../util/meals';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { HiArrowNarrowUp, HiArrowNarrowDown } from 'react-icons/hi';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [sortType, setSortType] = useState({ type: '', dir: null });
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
          rating: responseData[key].rating,
          nrOfVotes: responseData[key].nrOfVotes,
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

  const listedMeals = (
    category: string,
    sort: { type: string; dir: boolean }
  ) => {
    const sortedMeals = meals.filter((meal) => meal.category === category);
    if (sort.type === 'price' && sort.dir) {
      sortedMeals.sort((meal1, meal2) => meal1.price - meal2.price);
    }
    if (sort.type === 'price' && !sort.dir) {
      sortedMeals.sort((meal1, meal2) => meal2.price - meal1.price);
    }
    if (sort.type === 'rating' && sort.dir) {
      sortedMeals.sort((meal1, meal2) => meal1.rating - meal2.rating);
    }
    if (sort.type === 'rating' && !sort.dir) {
      sortedMeals.sort((meal1, meal2) => meal2.rating - meal1.rating);
    }
    let renderedMeals = sortedMeals.map((meal) => (
      <MealItem key={meal.id} meal={meal} />
    ));
    if (renderedMeals.length > 0) return <ul>{renderedMeals}</ul>;
    else return <p>No meals were found.</p>;
  };

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
            <Styles.SortButton
              onClick={() =>
                setSortType({ type: 'rating', dir: !sortType.dir })
              }
            >
              Sort by Rating
              {sortType.type === 'rating' && sortType.dir ? (
                <HiArrowNarrowUp />
              ) : (
                <HiArrowNarrowDown />
              )}
            </Styles.SortButton>
            <Styles.SortButton
              onClick={() => setSortType({ type: 'price', dir: !sortType.dir })}
            >
              Sort by Price
              {sortType.type === 'price' && sortType.dir ? (
                <HiArrowNarrowUp />
              ) : (
                <HiArrowNarrowDown />
              )}
            </Styles.SortButton>
          </TabList>
          <TabPanel>{listedMeals(CATEGORIES.BREAKFAST, sortType)}</TabPanel>
          <TabPanel>{listedMeals(CATEGORIES.LUNCH, sortType)}</TabPanel>
          <TabPanel>{listedMeals(CATEGORIES.DINNER, sortType)}</TabPanel>
        </Tabs>
      </Card>
    </Styles.MealsSection>
  );
};

export default AvailableMeals;

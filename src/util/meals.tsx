export const CATEGORIES: { [key: string]: number } = {
  breakfast: 0,
  lunch: 1,
  dinner: 2,
};

export const mealCategoryByDayTime = () => {
  const time = new Date().getHours();
  if (time < 12) return CATEGORIES.breakfast;
  else if (time >= 12 && time < 16) return CATEGORIES.lunch;
  else if (time >= 16) return CATEGORIES.dinner;
};

import { Box, Tab, Tabs, ThemeProvider, Typography } from '@mui/material';
import { useState } from 'react';
import { theme } from './style/CategoryTabs';

export const CategoryTabs = () => {
  const [value, setValue] = useState('1');
  const changeHandler = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={changeHandler}
        aria-label="Category tabs"
        centered
      >
        <Tab label="Breakfast" value="1"></Tab>
        <Tab label="Lunch" value="2"></Tab>
        <Tab label="Dinner" value="3"></Tab>
      </Tabs>
    </Box>
  );
};

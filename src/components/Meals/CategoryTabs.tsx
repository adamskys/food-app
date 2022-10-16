// import { Box, Tab, Tabs, ThemeProvider, Typography } from '@mui/material';
import { useState } from 'react';
// import AvailableMeals from './AvailableMeals';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  // todo: based on the time of the day

  return (
    <Tabs
      selectedIndex={activeCategory}
      onSelect={(index) => setActiveCategory(index)}
    >
      <TabList>
        <Tab>Breakfast</Tab>
        <Tab>Lunch</Tab>
        <Tab>Dinner</Tab>
      </TabList>

      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
  );
};

export default CategoryTabs;

// return (
//   <Tabs
//     activeKey={activeCategory}
//     onSelect={(category) => setActiveCategory(category)}
//   >
//     <Tab eventKey="breakfast" title="Breakfast">
//       {/* <AvailableMeals /> */}
//     </Tab>
//     <Tab eventKey="lunch" title="Lunch"></Tab>
//     <Tab eventKey="dinner" title="Dinner"></Tab>
//   </Tabs>
// );

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs
//           value={activeCategory}
//           onChange={changeHandler}
//           aria-label="Category tabs"
//           centered
//         >
//           <Tab label="Breakfast" value="breakfast"></Tab>
//           <Tab label="Lunch" value="lunch"></Tab>
//           <Tab label="Dinner" value="dinner"></Tab>
//         </Tabs>
//       </Box>
//       <TabPanel value={activeCategory} index={activeCategory}>
//         {/* <AvailableMeals /> */}
//       </TabPanel>
//     </Box>
//   );

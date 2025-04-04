import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TabsComp =()=> {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab label="Home" />
      <Tab label="About" />
      <Tab label="Books & Interviews" />
      <Tab label="Audio Books" />
      <Tab label="HG Illustrated" />
      <Tab label="Educ. Resources" />
    </Tabs>
  );
}
export default TabsComp;
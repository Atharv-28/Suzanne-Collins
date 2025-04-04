import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeContent from "./homeContent";

const TabsComp = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <Tab value={0} label="Home" />
        <Tab label="About" />
        <Tab label="Books & Interviews" />
        <Tab label="Audio Books" />
        <Tab label="HG Illustrated" />
        <Tab label="Educ. Resources" />
      </Tabs>
      {value === 0 && <HomeContent />}
    </>
  );
};
export default TabsComp;

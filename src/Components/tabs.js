import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeContent from "./homeContent";
import AboutContent from "./aboutContent";
import Books from "./books";
import AudioBooks from "./audio";

const TabsComp = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs_container">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
        className="tabs"
      >
        <Tab value={0} label="Home" />
        <Tab value={1} label="About" />
        <Tab value={2} label="Books & Interviews" />
        <Tab value={3} label="Audio Books" />
      </Tabs>
      {value === 0 && <HomeContent />}
      {value === 1 && <AboutContent />}
      {value === 2 && <Books />}
      {value === 3 && <AudioBooks />}
    </div>
  );
};
export default TabsComp;

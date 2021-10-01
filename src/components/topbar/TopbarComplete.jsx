import React, { useState } from "react";
import Topbar from "./Topbar";

const TopbarComplete = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const toggleDrawerStatus = () => {
    setIsDrawerOpened(!isDrawerOpened);
  };
  return (
    <>
      <Topbar handleMenuClick={toggleDrawerStatus} divider={true} />
    </>
  );
};

export default TopbarComplete;

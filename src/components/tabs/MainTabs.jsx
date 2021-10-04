import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PublicIcon from "@material-ui/icons/Public";
import TabHome from "./tabHome/TabHome";
import TabsNormal from "../common/TabsNormal";
import LabelTab from "../common/LabelTab";

export default function MainTabs(props) {
  const [tabToShow, setTabToShow] = useState(0);

  const itemsTabs = [
    {
      index: 0,
      icon: <PublicIcon />,
      content: <h1>Explore</h1>,
    },
    {
      index: 1,
      icon: (
        <LabelTab>
          <HomeIcon />
        </LabelTab>
      ),
      content: <TabHome {...props} />,
    },
  ];
  return (
    <TabsNormal
      itemTabs={itemsTabs}
      tabToShow={tabToShow}
      changeTab={setTabToShow}
      idTabs="tabsMain"
      tabsVariant="fullWidth"
      p={2}
    />
  );
}

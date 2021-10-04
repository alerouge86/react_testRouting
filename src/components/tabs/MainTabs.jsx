import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import HomeIcon from "@material-ui/icons/Home";
import PublicIcon from "@material-ui/icons/Public";
import TabHome from "./tabHome/TabHome";
import TabsNormal from "../common/TabsNormal";
import LabelTab from "../common/LabelTab";

export default function MainTabs(props) {
  const { location } = props;
  const { mainTab } = queryString.parse(location.search);
  let mainTabIndex = 0;
  if (mainTab) {
    if (mainTab === "home") {
      mainTabIndex = 1;
    }
  }
  const [tabToShow, setTabToShow] = useState(0);
  useEffect(() => {
    setTabToShow(mainTabIndex);
  }, []);

  const { push } = useHistory();
  const handleChangeTab = (tabIndex) => {
    if (tabIndex === 0) {
      push("/home?mainTab=explore");
    } else if (tabIndex === 1) {
      push("/home?mainTab=home&tabHome=calendar");
    }
  };

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
      changeTab={handleChangeTab}
      idTabs="tabsMain"
      tabsVariant="fullWidth"
      p={2}
    />
  );
}

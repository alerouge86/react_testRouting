import { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PublicIcon from "@material-ui/icons/Public";
import TabHome from "./tabHome/TabHome";
import TabsNormal from "../common/TabsNormal";
import LabelTab from "../common/LabelTab";

export default function MainTabs(props) {
  const match = useRouteMatch();
  const pathMatch = match.path;
  let tabIndex = 0;
  if (pathMatch) {
    if (
      pathMatch !== "/" &&
      pathMatch !== "/home" &&
      pathMatch !== "/explore"
    ) {
      tabIndex = 1;
    }
  }
  const [tabToShow, setTabToShow] = useState(0);
  useEffect(() => {
    setTabToShow(tabIndex);
  }, [tabIndex]);

  const { push } = useHistory();
  const handleChangeTab = (tabIndex) => {
    if (tabIndex === 0) {
      push("/explore");
    } else if (tabIndex === 1) {
      push("/calendar");
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

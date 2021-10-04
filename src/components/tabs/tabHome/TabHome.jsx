import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import TabsElevated from "../../common/TabsElevated";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TabCreate from "../tabCreate/TabCreate";
import EventNoteIcon from "@material-ui/icons/EventNote";

const TabHome = (props) => {
  const { location } = props;
  const { tabHome } = queryString.parse(location.search);
  let tabHomeIndex = 0;
  if (tabHome) {
    if (tabHome === "create") {
      tabHomeIndex = 1;
    }
  }
  const [tabToShow, setTabToShow] = useState(0);
  useEffect(() => {
    setTabToShow(tabHomeIndex);
  }, []);

  const { push } = useHistory();
  const handleChangeTab = (tabIndex) => {
    if (tabIndex === 0) {
      push("/home?mainTab=home&tabHome=calendar");
    } else if (tabIndex === 1) {
      push("/home?mainTab=home&tabHome=create");
    }
  };

  const { t } = useTranslation();
  const itemsTabs = [
    {
      index: 0,
      label: <EventNoteIcon />,
      content: <h1>calendar</h1>,
    },
    {
      index: 1,
      label: <AddCircleIcon />,
      content: <TabCreate t={t} />,
    },
  ];

  return (
    <TabsElevated
      itemTabs={itemsTabs}
      tabToShow={tabToShow}
      changeTab={handleChangeTab}
      idTabs="tabsEventsClubs"
      p={0}
    />
  );
};

export default TabHome;

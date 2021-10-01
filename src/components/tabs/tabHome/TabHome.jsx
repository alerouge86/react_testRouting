import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import queryString from "query-string";
import TabsElevated from "../../common/TabsElevated";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TabCreate from "../tabCreate/TabCreate";
import EventNoteIcon from "@material-ui/icons/EventNote";

const TabHome = (props) => {
  const { location } = props;
  let { tabHome } = queryString.parse(location.search);
  tabHome = tabHome ? parseInt(tabHome) : 0;
  const [tabToShow, setTabToShow] = useState(0);
  useEffect(() => {
    setTabToShow(tabHome);
  }, []);

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
      setTabToShow={setTabToShow}
      idTabs="tabsEventsClubs"
      p={0}
    />
  );
};

export default TabHome;

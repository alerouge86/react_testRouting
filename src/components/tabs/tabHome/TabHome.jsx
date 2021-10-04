import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouteMatch } from "react-router-dom";
import TabsElevated from "../../common/TabsElevated";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TabCreate from "../tabCreate/TabCreate";
import EventNoteIcon from "@material-ui/icons/EventNote";

const TabHome = () => {
  const [tabToShow, setTabToShow] = useState(0);

  const { t } = useTranslation();
  const itemsTabs = [
    {
      index: 0,
      label: <EventNoteIcon />,
      content: <h1>Calendar</h1>,
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
      changeTab={setTabToShow}
      idTabs="tabsEventsClubs"
      p={0}
    />
  );
};

export default TabHome;

import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import TabHome from "./tabHome/TabHome";
import TabsNormal from "../common/TabsNormal";
import LabelTab from "../common/LabelTab";

export default function MainTabs() {
  const itemsTabs = [
    {
      index: 0,
      icon: (
        <LabelTab>
          <HomeIcon />
        </LabelTab>
      ),
      content: <TabHome />,
    },
  ];
  return (
    <TabsNormal
      itemTabs={itemsTabs}
      idTabs="tabsMain"
      tabsVariant="fullWidth"
      p={2}
    />
  );
}

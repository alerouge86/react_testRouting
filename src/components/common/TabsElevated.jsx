import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { elevatedTabsStylesHook } from "@mui-treasury/styles/tabs";

const useStyles = makeStyles((theme) => ({
  tabs: {
    background: theme.palette.secondary.light,
    borderRadius: "8px 8px 0 0",
    borderBottomWidht: 1,
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.background.paper,
  },
}));

function a11yProps(index, idTabs) {
  return {
    id: `${idTabs}-tab-${index}`,
    "aria-controls": `${idTabs}-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, idTabs, p, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${idTabs}-tabpanel-${index}`}
      aria-labelledby={`${idTabs}-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={p ? p : 0}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const TabsElevated = ({ itemTabs, idTabs, p }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const tabsStyles = elevatedTabsStylesHook.useTabs();
  const tabItemStyles = elevatedTabsStylesHook.useTabItem();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        classes={tabsStyles}
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
      >
        {itemTabs.map((item) => {
          return (
            <Tab
              key={`${idTabs}-${item.index}`}
              classes={tabItemStyles}
              label={item.label}
              {...a11yProps(item.index, idTabs)}
            />
          );
        })}

        {/* <Tab classes={tabItemStyles} label={"Rule"} />{" "} */}
      </Tabs>
      {itemTabs.map((item) => {
        return (
          <TabPanel
            key={`${idTabs}-${item.index}`}
            value={value}
            index={item.index}
            p={p}
          >
            {item.content}
          </TabPanel>
        );
      })}
    </>
  );
};

export default TabsElevated;

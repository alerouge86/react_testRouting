import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

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

function a11yProps(index, idTabs) {
  return {
    id: `${idTabs}-tab-${index}`,
    "aria-controls": `${idTabs}-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.secondary.main,
    borderBottomColor: theme.palette.primary.main,
    borderBottomStyle: "solid",
    borderBottomWidth: 3,
    paddingTop: 10,
  },
  indicator: {
    backgroundColor: theme.palette.background.default,
    height: "7px",
    marginBottom: 2,
  },
}));

export default function TabsNormal({
  itemTabs,
  tabToShow,
  setTabToShow,
  idTabs,
  tabsVariant,
  p,
}) {
  const classes = useStyles();
  // const [value, setValue] = React.useState(tabToShow ? tabToShow : 0);

  const handleChange = (event, newValue) => {
    setTabToShow(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          classes={{
            indicator: classes.indicator,
          }}
          value={tabToShow}
          onChange={handleChange}
          variant={tabsVariant}
        >
          {itemTabs.map((item) => {
            return (
              <Tab
                key={`${idTabs}-${item.index}`}
                label={item.label}
                icon={item.icon ? item.icon : null}
                {...a11yProps(item.index, idTabs)}
              />
            );
          })}
        </Tabs>
      </AppBar>
      {itemTabs.map((item) => {
        return (
          <TabPanel
            key={`${idTabs}-${item.index}`}
            value={tabToShow}
            index={item.index}
            p={p}
          >
            {item.content}
          </TabPanel>
        );
      })}
    </div>
  );
}

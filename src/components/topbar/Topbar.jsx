import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import configGeneral from "../../config/general.json";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 85,
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 999,
    borderBottomColor: (props) =>
      props.divider ? theme.palette.background.default : "",
    borderBottomStyle: (props) => (props.divider ? "solid" : ""),
    borderBottomWidth: (props) => (props.divider ? 1 : 0),
  },
  left: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    paddingLeft: 10,
  },
  center: {
    flex: 9,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginLeft: 20,
    color: theme.palette.background.default,
    cursor: "pointer",
  },
  right: {
    flex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    color: theme.palette.background.default,
    marginRight: 10,
  },
}));

const Topbar = ({ handleMenuClick, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <Link to="/login">
          <span style={{ color: "white", fontWeight: "bold" }}>login</span>
        </Link>
      </div>
      <div className={classes.center}>
        <Link to="/">
          <span className={classes.title}>
            <strong>{configGeneral.app.title}</strong> -{" "}
            {configGeneral.app.title2}
          </span>
        </Link>
      </div>
      <div className={classes.right}></div>
    </div>
  );
};

export default Topbar;

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
  navbar: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
    borderBottom: "3px solid black",
    marginBottom: 10,
  },
  navbarList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
  },
  navbarListElement: {
    float: "left",
  },
  link: {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: 6,
    textDecoration: "none",
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
    <>
      <div className={classes.root}>
        <div className={classes.left}></div>
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
      <div className={classes.navbar}>
        <ul className={classes.navbarList}>
          <li className={classes.navbarListElement}>
            <Link to="/home" className={classes.link}>
              <span style={{ color: "white", fontWeight: "bold" }}>Home</span>
            </Link>
          </li>
          <li className={classes.navbarListElement}>
            <Link to="/home?mainTab=0" className={classes.link}>
              <span style={{ color: "white", fontWeight: "bold" }}>
                Explore
              </span>
            </Link>
          </li>
          <li className={classes.navbarListElement}>
            <Link to="/home?mainTab=1&tabHome=0" className={classes.link}>
              <span style={{ color: "white", fontWeight: "bold" }}>
                Calendar
              </span>
            </Link>
          </li>
          <li className={classes.navbarListElement}>
            <Link to="/home?mainTab=1&tabHome=1" className={classes.link}>
              <span style={{ color: "white", fontWeight: "bold" }}>Wizard</span>
            </Link>
          </li>
          <li className={classes.navbarListElement}>
            <Link to="/login" className={classes.link}>
              <span style={{ color: "white", fontWeight: "bold" }}>Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Topbar;

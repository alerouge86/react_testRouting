import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    padding: "10px 0 10px 10px",
    height: 60,
  },
  titleContainer: {
    flex: 11,
    display: "flex",
    alignItems: "center",
  },
  optionsButton: {
    flex: 1,
  },
  title: {
    marginLeft: 10,
  },
}));

const TabHomeTitle = ({ title, icon, toggleMenuOptionsButton }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ marginBottom: 20 }}>
      <div className={classes.titleContainer}>
        {icon}
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
      </div>
      {toggleMenuOptionsButton && (
        <div className={classes.optionsButton}>{toggleMenuOptionsButton}</div>
      )}
    </div>
  );
};

export default TabHomeTitle;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    position: "relative",
    borderBottom: `1px solid ${theme.palette.background.paper}`,
  },
  buttonCloseIcon: {
    flex: 1,
    fontSize: 40,
  },
  title: {
    flex: 10,
  },
  options: {
    flex: 1,
    color: theme.palette.background.paper,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function MyModal({
  t,
  title,
  content,
  open,
  handleClose,
  closeButton,
  toggleMenu,
}) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose}>
              {closeButton ? (
                <CloseIcon className={classes.buttonCloseIcon} />
              ) : (
                <ArrowBackIcon className={classes.buttonCloseIcon} />
              )}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            {toggleMenu ? toggleMenu : null}
          </Toolbar>
        </AppBar>
        {content}
      </Dialog>
    </div>
  );
}

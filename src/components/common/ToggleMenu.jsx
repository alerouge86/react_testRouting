import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  popper: {
    zIndex: 9,
    marginRight: (props) => (props.marginRight ? props.marginRight : 0),
  },
  paper: {
    backgroundColor: (props) => props.backgroundColor,
    borderWidth: (props) => (props.border ? 1 : 0),
    borderStyle: (props) => (props.border ? "solid" : ""),
    borderColor: (props) =>
      props.border ? theme.palette.background.default : "",
  },
  menuItem: {
    color: theme.palette.background.default,
  },
}));

export default function ToggleMenu({
  label,
  startIcon,
  endIcon,
  handleSelect,
  items,
  typeSelect,
  ...props
}) {
  const classes = useStyles(props);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(label);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event, value, label) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    if (value) {
      handleSelect(value);
    }
    if (label) {
      setSelectedValue(label);
    }
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="inherit"
          startIcon={startIcon ? startIcon : null}
          endIcon={endIcon ? endIcon : null}
        >
          {typeSelect ? selectedValue : label}
        </Button>
        <Popper
          className={classes.popper}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {items.map((item) => {
                      return (
                        <MenuItem
                          key={item.value}
                          onClick={(event) =>
                            handleClose(event, item.value, item.label)
                          }
                          className={classes.menuItem}
                        >
                          {item.label}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

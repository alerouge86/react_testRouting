import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../../service/store/updateAction";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  buttons: {
    margin: theme.spacing(3, 0, 2),
    display: "flex",
    justifyContent: "space-around",
  },
}));

const CreateEventWizard3 = ({ handleStep }) => {
  const classes = useStyles();
  const { actions, state } = useStateMachine({ updateAction });

  const { push } = useHistory();
  const handleFinish = () => {
    console.log("handleFinish");
    actions.updateAction({
      yourDetails: {
        firstName: "",
        lastName: "",
      },
    });
    // console.log("state after", state);
    handleStep("completed");
    push("/");
  };

  const handleStepBack = () => {
    handleStep("back");
    push("/step2");
  };

  const handleCancel = () => {
    console.log("handleCancel");
    actions.updateAction({
      yourDetails: {
        firstName: "",
        lastName: "",
      },
    });
  };

  return (
    <div className={classes.container}>
      <h1>Wizard completed</h1>
      <div className={classes.buttons}>
        <Button variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="secondary" onClick={handleStepBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleFinish}>
          Finish
        </Button>
      </div>
    </div>
  );
};

export default CreateEventWizard3;

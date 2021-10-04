import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../../service/store/updateAction";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyTextField from "../../../common/input/MyTextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  buttons: {
    margin: theme.spacing(3, 0, 2),
    display: "flex",
    justifyContent: "space-around",
  },
}));

const schema = yup.object().shape({
  lastName: yup.string().required(),
});

const CreateEventWizard2 = ({ handleStep }) => {
  const classes = useStyles();
  const { actions, state } = useStateMachine({ updateAction });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: state.yourDetails,
  });
  const { push } = useHistory();
  const onSubmit = (data) => {
    console.log("data wizard 2", data);
    handleStep("next");
    actions.updateAction(data);
    console.log("state", state);
    push("/step3");
  };

  const handleStepBack = () => {
    handleStep("back");
    push("/");
  };

  const handleCancel = () => {};

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MyTextField
              control={control}
              name="lastName"
              label="Last name"
              errors={errors}
              required
              autoFocus
            />
          </Grid>
        </Grid>

        <div className={classes.buttons}>
          {/* <Button variant="contained" onClick={handleCancel}>
            Cancel
          </Button> */}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleStepBack}
          >
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventWizard2;

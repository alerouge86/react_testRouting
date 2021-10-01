import { useEffect } from "react";
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
  firstName: yup.string().required(),
});

const CreateEventWizard1 = ({ handleStep }) => {
  const classes = useStyles();
  const { actions, state } = useStateMachine({ updateAction });

  useEffect(() => {
    // clean the state
    console.log("wizard 1 rendered");

    // actions.updateAction({
    //   yourDetails: {
    //     firstName: "",
    //     lastName: "",
    //   },
    // });
  }, []);

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
    console.log("data wizard 1", data);
    handleStep("next");
    actions.updateAction(data);
    console.log("state", state);
    push("/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MyTextField
            control={control}
            name="firstName"
            label="First name"
            errors={errors}
            required
            autoFocus
          />
        </Grid>
      </Grid>

      <div className={classes.buttons}>
        <Button type="submit" variant="contained" color="primary">
          Continue
        </Button>
      </div>
    </form>
  );
};

export default CreateEventWizard1;

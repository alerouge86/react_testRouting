import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MyTextField from "../components/common/input/MyTextField";
import MyCheckbox from "../components/common/input/MyCheckbox";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  remember: yup.string(),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 10,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 10,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: theme.palette.secondary.main,
  },
}));

const LoginForm = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MyTextField
                control={control}
                name="email"
                label="Email"
                errors={errors}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <MyTextField
                control={control}
                name="password"
                type="password"
                label="Password"
                errors={errors}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <MyCheckbox
                control={control}
                name="remember"
                label="Remember me"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;

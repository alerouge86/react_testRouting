import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyStepper from "../../../common/MyStepper";
import CreateEventWizard1 from "./../event/CreateEventWizard1";
import CreateEventWizard2 from "./../event/CreateEventWizard2";
import CreateEventWizard3 from "./../event/CreateEventWizard3";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10px 0 20px 0",
  },
  switchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    display: "inline",
  },
  form: {
    padding: "0 20px",
  },
}));

const stepsEvent = [1, 2, 3];

createStore({
  yourDetails: {
    firstName: "",
    lastName: "",
  },
});

const Pages = ({ handleStep }) => {
  return (
    <div>
      <Route
        exact
        path="/"
        render={(props) => (
          <CreateEventWizard1 handleStep={handleStep} {...props} />
        )}
      />
      <Route
        path="/step2"
        render={(props) => (
          <CreateEventWizard2 handleStep={handleStep} {...props} />
        )}
      />
      <Route
        path="/step3"
        render={(props) => (
          <CreateEventWizard3 handleStep={handleStep} {...props} />
        )}
      />
    </div>
  );
};

const CreateEventWizard = ({ t }) => {
  const classes = useStyles();
  const [steps] = useState(stepsEvent);
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (action) => {
    console.log("handleStep", action);
    console.log("activeStep before", activeStep);
    if (action === "next") {
      console.log("next");
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (action === "back") {
      console.log("back");
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    } else if (action === "completed") {
      setActiveStep(0);
    }
    console.log("activeStep after", activeStep);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>create</h1>
      <Card className={classes.container}>
        {activeStep < 4 && <MyStepper activeStep={activeStep} steps={steps} />}

        <div className={classes.form}>
          <StateMachineProvider>
            <Router>
              <Pages handleStep={handleStep} />
            </Router>
          </StateMachineProvider>
        </div>
      </Card>
    </>
  );
};

export default CreateEventWizard;

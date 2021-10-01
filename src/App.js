import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Scroll from "./components/common/Scroll";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import theme from "./theme";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import MomentUtils from "@date-io/moment";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Scroll showBelow={250} />
      <CssBaseLine />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="App">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;

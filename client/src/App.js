import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import purple from "@material-ui/core/colors/purple";


const App = () => {
  const theme = createMuiTheme({
    palette: {
      // primary: {
      //   // Purple and green play nicely together.
      //   main: purple[500],
      // },
      // secondary: {
      //   // This is green.A700 as hex.
      //   main: "#11cb5f",
      // },
      background: {
        default: '#18252e'
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path="/" render={(props) => <Landing {...props} />} />
        {/*<Route exact path="/:pokemonId" render={(props) => <Pokemon {...props} />}/>*/}
      </Switch>
    </ThemeProvider>
  );
};

export default App;

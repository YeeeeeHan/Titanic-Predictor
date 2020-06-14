import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";


const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#131419',
      },
      secondary: {
        main: "#eee34b",
      },
      background: {
        default: '#131419'
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

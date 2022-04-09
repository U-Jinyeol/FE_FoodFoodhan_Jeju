import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Header from "./components/Header";
import Grid from "./elements/Grid";
import Nav from "./components/Nav";

import { useDispatch } from "react-redux";

function App() {
  // const dispatch = useDispatch();

  // const _session_key = ""
  // const is_session = sessionStorage.getItem(_session_key) ? true : false;

  // React.useEffect(() => {
  //   if (is_session) {
  //     dispatch(userActions.loginCheckFB());
  //   }
  // }, []);

  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <Nav></Nav>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/detail" exact component={Detail} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;

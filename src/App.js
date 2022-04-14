import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Making from "./pages/Making";
import Header from "./components/Header";
import Grid from "./elements/Grid";
import Nav from "./components/Nav";
import { actionCreators } from "./redux/modules/user";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

  const is_login = localStorage.getItem("is_login") ? true : false;

  React.useEffect(() => {
    if (is_login) {
      dispatch(actionCreators.loginCheckDB());
    }
  }, []);

  return (
    <React.Fragment>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/making" exact component={Making}/>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/detail/:openApiId" exact component={Detail} />
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;

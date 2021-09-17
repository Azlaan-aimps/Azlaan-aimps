import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';
import './scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

// Containers
const TheLayout = React.lazy (() => import ('./containers/TheLayout'));

// Pages
const Login = React.lazy (() => import ('./login/Login'));

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/"
              name="Home"
              render={props => <Login {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={props => <TheLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;

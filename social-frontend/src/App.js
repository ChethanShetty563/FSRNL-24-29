import React from 'react';
import Home from './core/Home';
import Signup from './user/Signup';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Menu from './core/Menu';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Users from './user/Users';
import Signin from './auth/Signin';
import EditProfile from './user/EditProfile';
import PrivateRoute from './auth/PrivateRoute';
import Profile from './user/Profile';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
            <Route path="/user/:userId" component={Profile} />
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

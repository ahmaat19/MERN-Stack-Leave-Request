import React, {  useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Login from './components/auth/Login';
import ChangePassword from './components/auth/ChangePassword';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import Department from './components/department/Department';
import Employee from './components/employee/Employee';
import Leave from './components/leave/Leave';
import Report from './components/dashboard/Report';

import { loadUser } from './actions/auth';
import { LOGOUT } from './actions/types';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routes/PrivateRoute';
import AdminPrivateRoute from './components/routes/AdminPrivateRoute';

// Redux
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/layout/Layout';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// const NoMatch = ({ location }) => (
//   <div>
//     <h3>
//       {' '}
//       No match for <code>{location.pathname}</code>{' '}
//     </h3>
//   </div>
// );
const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Layout>
            <Alert />
            <Route path='/login' component={Login} />
            <AdminPrivateRoute path='/register' component={Register} />
            <PrivateRoute path='/change-password' component={ChangePassword} />
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute exact path='/department' component={Department} />
            <PrivateRoute exact path='/employee' component={Employee} />
            <PrivateRoute exact path='/leave/:id' component={Leave} />
            <PrivateRoute exact path='/report' component={Report} />
            {/* <Route component={NoMatch} /> */}
          </Layout>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

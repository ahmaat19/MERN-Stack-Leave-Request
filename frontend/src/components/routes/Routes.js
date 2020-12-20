import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeScreen from '../../screens/HomeScreen'
import LoginScreen from '../../screens/LoginScreen'
import ProfileScreen from '../../screens/ProfileScreen'
import RegisterScreen from '../../screens/RegisterScreen'
import UserListScreen from '../../screens/UserListScreen'
import NotFound from '../NotFound'

import PrivateRoute from '../routes/PrivateRoute'
import AdminPrivateRoute from '../routes/AdminPrivateRoute'
import DepartmentScreen from '../../screens/DepartmentScreen'
import DiscountScreen from '../../screens/DiscountScreen'
import EmployeeScreen from '../../screens/EmployeeScreen'
import LeaveScreen from '../../screens/LeaveScreen'
import ReportScreen from '../../screens/ReportScreen'

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route path='/login' component={LoginScreen} />
        <PrivateRoute path='/register' component={RegisterScreen} />
        <PrivateRoute path='/profile' component={ProfileScreen} />
        <PrivateRoute path='/department' component={DepartmentScreen} />
        <PrivateRoute path='/report' component={ReportScreen} />
        <PrivateRoute path='/leave/:id' component={LeaveScreen} />
        <Route path='/discount' component={DiscountScreen} />
        <PrivateRoute path='/employee' component={EmployeeScreen} />
        <AdminPrivateRoute
          exact
          path='/admin/users'
          component={UserListScreen}
        />
        <AdminPrivateRoute
          path='/admin/users/page/:pageNumber'
          component={UserListScreen}
        />

        <PrivateRoute exact path='/' component={HomeScreen} />
        <Route component={NotFound} />
      </Switch>
    </section>
  )
}

export default Routes
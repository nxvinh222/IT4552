import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./App.css";

import Login from './containers/Login'
import AdminDashboard from './containers/admin/AdminDashboard';
import ManagerDashboard from './containers/manager/ManagerDashboard';
import StoreInfo from './components/StoreInfo';
import ProductPage from './containers/manager/ProductPage';
import StaffPage from './containers/admin/StaffPage';
import StaffInfo from './components/StaffInfo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <React.Suspense>
          <Switch>
            <Route exact path="/" render={(props) => {
              return <Login />
            }} />
            <Route exact path="/admin" render={(props) => {
              return <AdminDashboard />
            }} />
            <Route exact path="/admin/staff" render={(props) => {
              return <StaffPage />
            }} />
            <Route exact path="/manager/shop" render={(props) => {
              return <StoreInfo />
            }} />
            <Route exact path="/manager" render={(props) => {
              return (
                <div>
                  <ManagerDashboard />
                </div>
              )
            }} />
            <Route exact path="/manager/staff" render={(props) => {
              return (
                <div>
                  <StaffInfo />
                </div>
              )
            }} />
            <Route exact path="/manager/items" render={(props) => {
              return (
                <div>
                  <ProductPage />
                </div>
              )
            }} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
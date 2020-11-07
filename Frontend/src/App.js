import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './containers/Login'
import "./App.css";
import AdminDashboard from './containers/AdminDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
          <React.Suspense>
            <Switch>
              <Route exact path="/" render={(props) => {
                return <Login/>
              }} />
              <Route exact path="/admin" render={(props) => {
                return (
                  <div>
                    <Navbar/>
                    <AdminDashboard/>
                    <Footer/>
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
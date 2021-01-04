import React from 'react';
import Header from './components/header/Header.js';
import Sidebar from './components/sidebar/Sidebar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Mail from './components/mail/Mail.js';
import EmailList from './components/emailList/EmailList.js';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;

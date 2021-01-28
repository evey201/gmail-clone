import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import SendMail from './components/sendMail/sendMail.js';
import {selectSendMessageIsOpen} from './features/mailSlice';
import { login, selectUser } from './features/userSlice.js';
import Login from './components/login/login.js';
import { auth } from './utils/firebase.js';

function App() {
  const sendMessgeIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          })
        );
      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
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

            {sendMessgeIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;

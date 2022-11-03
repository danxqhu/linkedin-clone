// import React, { useEffect, useState } from 'react';
import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';
import { logout, login, selectUser } from './features/userSlice';
// import { logout, login } from './features/userSlice';
import { auth } from './firebase';
import BackDrop from './BackDrop';

import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // const [userLocal, setUserLocal] = useState(() => {
  //   // getting stored value
  //   const saved = localStorage.getItem('user');
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || null;
  // });

  const [userLocal] = useLocalStorage('user', null);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      // console.log('dispatch', dispatch(login()));
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          }),
        );
        // setUserLocal(user);
      } else {
        // user is logged out
        dispatch(logout());
        // setUserLocal(null);
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Header></Header>
      <BackDrop></BackDrop>

      {/* {userLocal ? (
        <div className="app__body">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Widgets></Widgets>
        </div>
      ) : (
        <Login />
      )} */}

      {/* after refresh page,check user localStorage  */}
      {userLocal ? (
        <div className="app__body">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Widgets></Widgets>
        </div>
      ) : user ? (
        <div className="app__body">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Widgets></Widgets>
        </div>
      ) : (
        <Login />
      )}

      {/* {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Widgets></Widgets>
        </div>
      )} */}
    </div>
  );
}

export default App;

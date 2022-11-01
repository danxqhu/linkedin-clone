import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';
import { logout, login, selectUser } from './features/userSlice';
import { auth } from './firebase';
import BackDrop from './BackDrop';
// import { store } from './app/store';
// import { handleClose } from './features/openSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // store.subscribe(() => {
  //   if (store.getState().user) {
  //     dispatch(handleClose());
  //   }
  // });

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      console.log('dispatch', dispatch(login()));
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
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header></Header>
      <BackDrop></BackDrop>

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Widgets></Widgets>
        </div>
      )}
    </div>
  );
}

export default App;

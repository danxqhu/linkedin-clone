import React from 'react';
import { useState } from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import './Login.css';
import { login } from './features/userSlice';
import { handleToggle } from './features/openSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const dispatch = useDispatch();

  const loginToApp = e => {
    e.preventDefault();
    dispatch(
      handleToggle({
        open: true,
      }),
    );

    auth
      .signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        // console.log('userAuth:', userAuth);

        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          }),
        );
      })
      .catch(error => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert('Please enter a full name');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoURL,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: photoURL,
              }),
            );
          });
      })
      .catch(error => alert(error));
  };

  return (
    <div className="login">
      <img src={require('./assets/LI-Logo.png')} alt="" />

      <form>
        <input type="text" placeholder="Full name (required if registering)" value={name} onChange={e => setName(e.target.value)} />

        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={photoURL}
          onChange={e => {
            setPhotoURL(e.target.value);
          }}
        />

        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{'  '}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;

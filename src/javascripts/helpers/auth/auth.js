import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../../components/buttons/loginButton';
import logoutButton from '../../components/buttons/logoutButton';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      logoutButton();
    } else {
      loginButton();
    }
  });
};

export default checkLoginStatus;

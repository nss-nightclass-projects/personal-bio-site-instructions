// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import aboutMePage from './aboutMe';
import navBar from './components/navBar';
import initialScreen from './initialScreen';
import techPage from './techPage';

const init = () => {
  initialScreen();
  navBar();
  aboutMePage();
  techPage();

  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();

import aboutMePage from '../aboutMe';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  aboutMePage();
};

export default startApp;

import aboutMePage from '../components/about';
import domBuilder from './domBuilder';
import navBar from '../components/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  aboutMePage();
};

export default startApp;

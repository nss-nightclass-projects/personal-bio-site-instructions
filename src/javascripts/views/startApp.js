import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import aboutPage from '../components/showAboutPage';
import showProjects from '../components/showProjectCards';

const startApp = () => {
  domBuilder();
  navBar();
  aboutPage();
  showProjects();
};

export default startApp;

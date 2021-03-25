import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import getProjects from '../components/projects';
import aboutPage from '../components/about';

const startApp = () => {
  domBuilder();
  navBar();
  aboutPage();
  getProjects();
};

export default startApp;

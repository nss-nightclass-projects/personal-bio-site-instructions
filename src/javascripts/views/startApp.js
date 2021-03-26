import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import getProjects from '../components/projects';
import aboutPage from '../components/about';
import projects from '../helpers/data/projectsData';

const startApp = () => {
  domBuilder();
  navBar();
  aboutPage();
  getProjects(projects);
};

export default startApp;

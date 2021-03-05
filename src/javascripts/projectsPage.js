import renderToDom from './helpers/renderToDom';

const printToProjectsPage = () => {
  let domString = '';
  domString += `

  
  `;

  renderToDom('projects-page', domString);
};

export default printToProjectsPage;

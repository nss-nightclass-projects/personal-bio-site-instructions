import renderToDom from './helpers/renderToDom';

const initialScreen = () => {
  let domString = '';
  domString += `     
  <main>
    <nav id="nav-container"></nav>
    <div class="container" id="about-me-page"></div>
    <div class="container" id="tech-page"></div>
    <div class="container" id="projects-page"></div> 
    <div class="container" id="footer"></div>
  </main>
  
  `;

  renderToDom('#app', domString);
};

export default initialScreen;

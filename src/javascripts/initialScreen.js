import renderToDom from './helpers/renderToDom';

const initialScreen = () => {
  let domString = '';
  domString += `     
  <main>
    <nav id="nav-container"></nav>
    <div class="container" id="about-me-page"></div> <hr>
  </main>
  
  `;

  renderToDom('#app', domString);
};

export default initialScreen;

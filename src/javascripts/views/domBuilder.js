const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="nav-container"></div>
  <div id="about-container"></div>
  <hr>
  <div id="projects-container"></div>
  <hr>
  <div id="tech-container">tech here</div>`;
};

export default domBuilder;

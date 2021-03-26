const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="nav-container"></div>
  <div id="about-container"></div>
  <div id="projects-container"></div>
  <div id="tech-container"></div>`;
};

export default domBuilder;

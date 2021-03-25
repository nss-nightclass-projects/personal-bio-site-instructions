const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="nav-container"></div>
  <div id="about-container"></div>
  <div id="projects-container">projects here</div>
  <div id="tech-container">tech here</div>`;
};

export default domBuilder;

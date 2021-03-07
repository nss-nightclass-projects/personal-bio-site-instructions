const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="nav-container"></div>
  <div id="about-me-page"></div>
  <div id="projects-page">projects here</div>
  <div id="tech-page">tech here</div>`;
};

export default domBuilder;

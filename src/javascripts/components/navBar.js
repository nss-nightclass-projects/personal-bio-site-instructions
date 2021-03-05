import renderToDom from '../helpers/renderToDom';

const navBar = () => {
  let domString = '';
  domString += `
  <section id="nav-container">
    <ul class="nav nav-tabs justify-content-lg-end">
      <li class="nav-item"><a class="nav-link active" href="#about-me-page">About</a></li>
      <li class="nav-item"><a class="nav-link" href="#tech-page">Technologies</a></li>
      <li class="nav-item"><a class="nav-link" href="#projects-page">Projects</a></li>
    </ul>
  </section>`;

  renderToDom('#nav-container', domString);
};

export default navBar;

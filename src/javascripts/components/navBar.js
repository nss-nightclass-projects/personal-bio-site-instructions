const navBar = () => {
  document.querySelector('#nav-container').innerHTML = `
  <div id="nav-container">
    <ul class="nav nav-tabs justify-content-lg-end" id="myTab" role="tablist">
      <li class="nav-item"><a class="nav-link active" href="#about-me-page">About</a></li>
      <li class="nav-item"><a class="nav-link" href="#tech-page">Technologies</a></li>
      <li class="nav-item"><a class="nav-link" href="#projects-page">Projects</a></li>
    </ul>
  </div>`;
};

export default navBar;

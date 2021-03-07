import renderToDom from '../helpers/renderToDom';

const createProjectCards = (arr) => {
  let domString = '';
  arr.forEach((project, i) => {
    if (project.available === true) {
      domString += `
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <div class="card m-5" style="width: 36rem;" id=${i}>
            <img src="${project.screenshot}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <p class="card-text">${project.technologiesUsed}</p>
              <p class="card-text">${project.dateCompleted}</p>
            </div>
            <div class="card-body">
              <a href="${project.url}" class="card-link">URL</a>
              <a href="${project.githubUrl}" class="card-link">GitHubURL</a>
            </div>
          </div>
        </div>
      </div>`;
    }
  });

  renderToDom('#projects-page', domString);
};

export default createProjectCards;

const createProjectCards = (array) => {
  array.forEach((project) => {
    document.querySelector('#projects-container').innerHTML += `
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <div class="card m-5" style="width: 36rem;">
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
  });
};

export default createProjectCards;

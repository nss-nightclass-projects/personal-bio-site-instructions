const getProjects = (array) => {
  array.forEach((item) => {
    document.querySelector('#projects-container').innerHTML += `
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <div class="card m-5" style="width: 36rem;">
            <img src="${item.screenshot}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
              <p class="card-text">${item.technologiesUsed}</p>
              <p class="card-text">${item.dateCompleted}</p>
            </div>
            <div class="card-body">
              <a href="${item.url}" class="card-link">URL</a>
              <a href="${item.githubUrl}" class="card-link">GitHubURL</a>
            </div>
          </div>
        </div>
      </div>`;
  });
};

export default getProjects;

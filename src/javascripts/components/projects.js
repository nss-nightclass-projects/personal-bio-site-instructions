const getProjects = (array) => {
  array.forEach((item) => {
    document.querySelector('#projects-container').innerHTML += `
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <div class="card m-3" style="width: 25em;">
            <div class="card-body">
              <img src="${item.screenshot}" class="card-img-top">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
              <p class="card-text">${item.technologiesUsed}</p>
              <p class="card-text">${item.dateCompleted}</p>
              <a href="${item.url}" class="card-link">URL</a>
              <a href="${item.githubUrl}" class="card-link">GitHubURL</a>
            </div>
          </div>
        </div>
      </div>`;
  });
};

export default getProjects;

import renderToDom from '../helpers/renderToDom';

const createProjectCards = (arr) => {
  let domString = '';
  arr.forEach((card, i) => {
    if (card.available === true) {
      domString += `<div class="row">
                      <div class="col-lg-12 d-flex justify-content-center">
                        <div class="card m-5" style="width: 36rem;" id=${i}>
                          <img src="${card.screenshot}" class="card-img-top">
                          <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text">${card.description}</p>
                            <p class="card-text">${card.technologiesUsed}</p>
                          </div>
                          <div class="card-body">
                            <a href="${card.url}" class="card-link">URL</a>
                            <a href="${card.githubUrl}" class="card-link">GitHubURL</a>
                          </div>
                        </div>
                      </div>
                    </div>`;
    }
  });

  renderToDom('#projects-page', domString);
};

export default createProjectCards;

// Imported Function
import { projects, getProjects } from './projectsData.js';
console.log("personal-bio");

// function prints the projects car to the first parentChild <div/id element in Dom
const printToDom = (id, textPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textPrint;
};

const createProjectCards = function (available) {

  let domString = '';
  for (project of projects) {
    domString += `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Journal</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>`;
    if (project.available === true) {
      return printToDom("#projectsPage", domString);
    } else {
      return false;
    }
  }
};

// initializes the function createProjectCard
function init() {
  createProjectCards(projects);
};
// invokes the function
init();

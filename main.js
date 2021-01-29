console.log("Greetings beautiful from main.js")

// PROJECTS ARRAY
const projects = [
  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
];


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}


//CREATE PROJECT CARDS FUNCTION
const createProjectCards = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
                    <div class="img-container" style="background-image: url('${arr[i].imageUrl}');"></div>
                    <div class="card-body">
                      <p class="card-text">${arr[i].title}</p>
                      <p class="card-text">${arr[i].screenshot}</p>
                      <p class="card-text">${arr[i].description}</p>
                      <p class="card-text">${arr[i].technologiesUsed}</p>
                      <p class="card-text">${arr[i].available}</p>
                      <p class="card-text">${arr[i].url}</p>
                      <p class="card-text">${arr[i].githubUrl}</p>
                      <button type="button" class="btn btn-danger" id="${i}">Delete</button>
                    </div>
                  </div>`;
  }

  printToDom('#projects', domString);
}

const handleButtonClick = (e) => {
  const buttonId = e.target.id;


  const selectedProjects = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].available === buttonId) {
      selectedProjects.push(projects[i]);
    }
  }

}


//CALL THE CREATE PROJECTS FUNCTION BELOW
// createProjectCards();

const init = () => {
  createProjectCards(projects);
}

init();

console.log('Hello, World!')

const projects = [
  {
    title: "Personal Bio", 
    screenshot: "https://danicrosby-bio.netlify.app/", 
    description: "This is my personal portfolio site. Under construction",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://danicrosby-bio.netlify.app/",
    githubUrl: "https://github.com/danicrosby",
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = (arr) => {
  let domString = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].available === true) {
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
                    </div>
                  </div>`;
    }
  }

  printToDom("#projectsPage", domString);
};

const init = () => {
  createProjectCards(projects);
};

init();

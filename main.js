// console.log("Personal Bio Baby")

const projects = [
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  },
  {
    title: "First Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "First project of many!",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/BenJarrett/personal-bio-site-instructions",
    githubUrl: "https://github.com/BenJarrett/personal-bio-site-instructions"
  }
]

const PrintToDom = (divId, printThisText) => {
  const selectThisDiv = document.querySelector(divId)
  selectThisDiv.innerHTML = printThisText;
}

const createProjectCards = (taco) => {
  let domString = '';

  for (let i = 0; i < taco.length; i++) {
    domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
    <div class="img-container" style="background-image: url('${taco[i].imageURL}');"></div>
    <div class="card-body">
      <p class="card-text">${taco[i].title}</p>
      <p class="card-text">${taco[i].screenshot}</p>
      <p class="card-text">${taco[i].description}</p>
      <p class="card-text">${taco[i].technologiesUsed}</p>
      <p class="card-text">${taco[i].available}</p>
      <p class="card-text">${taco[i].url}</p>
      <p class="card-text">${taco[i].githubUrl}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
  }
  PrintToDom('#projectsPage', domString);

}

const init = () => {
  createProjectCards(projects);
}


init()

# Personal Bio Site 1: HTML & CSS || Using JS to print projects to the page

### Projects Section

{
  title: "Personal Bio", 
  screenshot: "https://danicrosby-bio.netlify.app/", 
  description: "This is my personal portfolio site. Under construction",
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://danicrosby-bio.netlify.app/",
  githubUrl: "https://github.com/danicrosby",
}

3. Create two functions:
	* printToDom:  This function should accept 2 arguments: the ID of the element to print it in and a string to print.
	* createProjectCards: This function should loop through the projects array and build up a 'dom string' (a complex HTML structure represented by a string) that includes all the information on the project. It should call the printToDom function for each project (hint: For this one, you'll be printing to the div with the ID `projectsPage`).
4. Only print 'available' projects. In your `createProjectCards` function, add logic to only show the project on the page if it has a value of `true` in the `available` property.
5.  Call the ```createProjectCards();``` function in an init function that runs when the project loads.

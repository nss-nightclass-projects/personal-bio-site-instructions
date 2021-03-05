
## Features

### Modify your navbar
1.  We really want this to be a single page app.  If you currently have different html files for the different sections its time to remove those other files.
1.  Consolidate all your html files to a single index.html file (put each of the pages into its own div with an id)
1.  Modify your navbar so when you click a link it either a. Hides all divs except the one you clicked on OR b. scrolls down the page to tht specific section.  Totally your choice - just pick one.

### Add webpack
1.  Modify your project to add in webpack - this will involve you changing the file structure (`src/javascripts/main.js`) and convert your css to SCSS files
1.  You will probably have a TON of linting errors - FIX THEM
1.  Once this branch is complete you should be able to run npm start and have your project look exactly the way it did before

### Modify projects
1.  Move your projects array into a projectsData file in helpers.
1.  Create a getProjects method that returns the projects array to whatever dom string builder needs the array
1.  You should have 5 projects in the projects array
1.  2 of the projects should be real projects that you have done - pick two from class that you are especially proud of.  Include screenshots, real links to github, a space for a deployed link (we will deploy these 2 projects right after break)
1.  Completely style how these projects are displayed - like your almost final version.  Since you have real projects in for 2 of these you will know exactly how your projects are going to display

### Update Featured Projects Repos
For the two REAL projects you added in the above step
1.  Make sure they have a NICE README
1.  Make sure they have clean code - fix spacing, indentation, delete commented code
1.  If you are using a group project fork the group project so it is on your github and then you can go in and clean up the code and readme.  Link everything to YOUR version of the group project - NOT the one in the E11 github organization

### STYLE IT REAL NICE
1.  Guess what you have SCSS NOW!!!!!!!
1.  Use it to your advantage and get this page looking better - doesn't have to be 100% perfect but as close as you can

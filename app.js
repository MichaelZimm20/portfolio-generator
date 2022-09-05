const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));












// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);


// The first argument is the file name that will be created, or the output file. 
// The second argument is the data that's being written: the HTML string template. 
// The third argument is the callback function that will handle any errors as well as the success message.

// fs.writeFile('index.html', err => {
//     if (err) throw err;

//     console.log('Portofolio complete! Check out index.html to see the output!');
// });
















































// console.log(profileDataArgs);


// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {

//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
    

// };

// printProfileData(profileDataArgs);

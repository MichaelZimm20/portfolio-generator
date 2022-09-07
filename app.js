const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub username!');
                  return false;
                }
              }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
          },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
        }
    ]);
};
// promptUser().then(answers => console.log(answers));


const promptProject = portfolioData => {
    // if there's no 'projects' array property, create one 
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
        =================
        Add a New Project
        =================
        `);

    return  inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('You need to enter a project name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('You need to enter a project description!');
                  return false;
                }
              }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap','Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the github link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                  return true;
                } else {
                  console.log('You need to enter a project GitHub link!');
                  return false;
                }
              }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
    
};



promptUser()
    .then(promptProject)
    .then(portfolioData => {
        return generatePage(portfolioData);
    })

    .then(pageHTML => {
        return writeFile(pageHTML);
    })

    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })

    .then(copyFileResponse => {
        console.log(copyFileResponse);
        
    })

    .catch(err => {
        console.log(err);
       
    });

   
   




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

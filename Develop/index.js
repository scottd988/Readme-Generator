// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'index',
        name: 'title',
        message: 'What is the title of your project?'
    }, {
        type: 'index',
        name: 'description',
        message: 'Enter a description of the project.'
    }, {
        type: 'index',
        name: 'installation instructions',
        message: 'Enter installation instructions for the project.'
    }, {
        type: 'index',
        name: 'usage information',
        message: 'Enter usage information for the project.' 
    }, {
        type: 'index',
        name: 'contribution guidelines',
        message: 'Enter contribution guidelines for the project.'
    }, {
        type: 'index',
        name: 'test instructions',
        message: 'Enter test instructions for the project.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    /** Takes in questions array 
     *  Pass your questions in here 
    */
        .prompt(questions)
            /* Pass your questions in here */
        
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();

 
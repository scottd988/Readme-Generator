// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    }, {
        type: 'input',
        name: 'Description',
        message: 'Enter a description of the project.'
    }, {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation instructions for the project.'
    }, {
        type: 'input',
        name: 'Usage',
        message: 'Enter usage information for the project.' 
    }, {
        type: 'input',
        name: 'Contributing',
        message: 'Enter contribution guidelines for the project.'
    }, {
        type: 'input',
        name: 'Tests',
        message: 'Enter test instructions for the project.'
    }
];

/**  TODO: Create a function to write README file
 * Takes in fileName which will be README
 * Takes in data from generateMarkdown
 * writeFile appends data to said file
 * Logs error if error
*/
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Commit logged!')
        );
    }
/**  TODO: Create a function to initialize app
 * Promts the array of questions
 * .then log answers to console
 * create const to hold answers
 * call writeToFile to print answers to README.md file
*/
function init() {
    inquirer
    /** Takes in questions array 
     *  Pass your questions in here 
    */
        .prompt(questions).then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers);
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.error(error);
            } else {
                // Something else went wrong
                console.error(error);
            }   
        });
}

// Function call to initialize app
init();

 
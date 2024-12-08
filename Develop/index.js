// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([

        //TITLE OF DOCUMENT
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },

        //DESCRIPTION
        {
            type: 'input',
            name: 'motive',
            message: 'What was your motivation to create this project?',
        },
        {
            type: 'input',
            name: 'reason',
            message: 'What was your reason for building this project?',
        },
        {
            type: 'input',
            name: 'problems',
            message: 'What problems did you face in creating this project?',
        },        
        {
            type: 'input',
            name: 'learn',
            message: 'What do you learn when creating this project?',
        },        
        {
            type: 'input',
            name: 'standOut',
            message: 'What about your project makes it stand out?',
        },        
        {
            type: 'input',
            name: 'challenge',
            message: 'What challenes did you have to overcome in order to create this project?',
        },        
        {
            type: 'input',
            name: 'features',
            message: 'In the future, if you were to add more to this project, what features would you add?',
        },        
        {
            type: 'input',
            name: 'link',
            message: 'Please paste a URL of your deployed project here:',
        },

        //INSTALLATION
        {
            type: 'input',
            name: 'install',
            message: 'Give a step-by-step guide on how to install the project. (Please uses 1., 2., 3., etc.)',
        },

        //USAGE
        {
            type: 'input',
            name: 'instructions',
            message: 'Please give detailed instructions for using the project. (Please uses 1., 2., 3., etc.)',
        },
        {
            type: 'input',
            name: 'screenshots',
            message: 'Please add screenshots labeled with that above numbering system.',
        },

        //CREDITS
        {
            type: 'input',
            name: 'creditCollab',
            message: 'Please list all the people that contributed to this project, along with their GitHub page URL.',
        },
        {
            type: 'input',
            name: 'credit3rd',
            message: 'Please list all third-party assets used to help create this project, along with their URL.',
        },
        {
            type: 'input',
            name: 'creditTutorial',
            message: 'Please list all tutorials, or instructional information used to create this project, along with their URL.',
        },

        //LICENSE
        {
            type: 'list',
            name: 'license',
            message: 'Please add the license used for this project.',
            choices: ['MIT', 'Apache License 2.0', 'GPL-3.0', 'BSD 3-Clause License', 'CC BY 4.0', 'none']
        },

        //FEATURES
        {
            type: 'input',
            name: 'currentFeatures',
            message: 'Please give a description of current features that the project has.',
        },

        //HOW TO CONTRIBUTE
        {
            type: 'input',
            name: 'contribute',
            message: 'Please give detailed instructions on how another person can contribute to a project, or whether they cannot',
        },

        //TEST
        {
            type: 'input',
            name: 'tests',
            message: 'Please detail what test, if any, have been included with this project and how to use the tests.',
        },

        //QUESTIONS 
        {
            type: 'input',
            name: 'github',
            message: 'Please write your GitHub username here:'
        },
        {
            type: 'input',
            name: 'githubURL',
            message: 'Please insert your GitHub URL here:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please write your eMail here:'
        },
    ])
};

//TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    try{
        const answers = await questions();
        const readme = await generateMarkdown(answers);

        fs.writeFile('README.md', readme, (err) =>
            err ? console.error(err) : console.log('Successfully created README.md!')
        );
    } catch (err) {
        console.error('Error', err);
    }
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
}

// Function call to initialize app
init();

import colors from 'colors';

async function renderLicenseBadge(license) {
  try{  
    const licenseName = license.trim();

    if (licenseName === 'none') {
      console.log('No license Link')
      return '';
    }

    if (licenseName === 'MIT') {
      console.log('Badge good')
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    }

    if (licenseName === 'Apache License 2.0') {
      console.log('Badge good')
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    }

    if (licenseName === 'GPL-3.0') {
      console.log('Badge good')
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    }

    if (licenseName === 'BSD 3-Clause License') {
      console.log('Badge good')
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    }

    if (licenseName === 'CC BY 4.0') {
      console.log('Badge good')
      return '![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)';
    }

    console.log('Unrecognized license:', licenseName);
    return '';

  } catch (err) {
    console.error('Error in renderLicenseLink', err)
    return '';
  }
}


async function renderLicenseLink(license) {
  try{  
    const licenseName = license.trim();

    if (licenseName === 'none') {
      console.log('No license Link')
      return '';
    }

    if (licenseName === 'MIT') {
      console.log('Link good')
      return 'https://opensource.org/licenses/MIT';
    }

    if (licenseName === 'Apache License 2.0') {
      console.log('Link good')
      return 'https://opensource.org/licenses/Apache-2.0';
    }

    if (licenseName === 'GPL-3.0') {
      console.log('Link good')
      return 'https://www.gnu.org/licenses/gpl-3.0';
    }

    if (licenseName === 'BSD 3-Clause License') {
      console.log('Link good')
      return 'https://opensource.org/licenses/BSD-3-Clause';
    }

    if (licenseName === 'CC BY 4.0') {
      console.log('Link good')
      return 'https://creativecommons.org/licenses/by/4.0/';
    }

    console.log('Unrecognized license:', licenseName);
    return '';

  } catch (err) {
    console.error('Error in renderLicenseLink', err)
    return '';
  }
}


async function renderLicenseSection(license) {
  try{  
    const licenseName = license.trim();

    if (licenseName === 'none') {
      console.log('No license Section')
      return ''

    }else {
      console.log('##License')
      return `## License
      
  The license used in this project is ${licenseName}`
    }

  } catch (err) {
    console.error('Error', err)
  }
}


async function generateMarkdown(data) {

  try{

  const licenseSection = await renderLicenseSection(data.license);
  const licenseBadge = await renderLicenseBadge(data.license);
  const licenseLink = await renderLicenseLink(data.license);


return `# ${data.title}

  ${licenseBadge}

## DESCRIPTION

  ${data.motive}

  ${data.reason}

  ${data.problems}

  ${data.learn}

  ${data.standOut} 

  ${data.challenge} 

  ${data.features} 

  ${data.link}      

  
## Table of Contents
  
  [Installation](#Installation)
        
  [Usage](#usage)
        
  [Credits](#credits)
        
  [License](#license)

  [Features](#features)

  [How to Contribute](#how-to-contribute)

  [Tests](#tests)

  [Questions](#questions)


## Installation
      
  ${data.install}
  

## Usage
  
  ${data.instructions}
        
  ${data.screenshots}
  

## Credits
  
  ${data.creditCollab}
        
  ${data.credit3rd}
        
  ${data.creditTutorial}
  

${licenseSection}

  ${licenseLink}
  

## Features
  
  ${data.currentFeatures}
  

## How to Contribute
  
  ${data.contribute}


## Tests
  
  ${data.tests}

## Questions

  ${data.github}

  ${data.githubURL}

  ${data.email}`;

  } catch (err) {
    console.error('Error', err)
  }
}

export default generateMarkdown
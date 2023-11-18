// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    'IBM': '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]',
    'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]',
    'Mozilla': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]',
    'SIL': '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]',
    'NA': ''
  }
  return licenseBadge[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseLink = {
      'MIT': '(https://opensource.org/licenses/MIT)',
      'IBM': '(https://opensource.org/licenses/IPL-1.0)',
      'ISC': '(https://opensource.org/licenses/ISC)',
      'Mozilla': '(https://opensource.org/licenses/MPL-2.0)',
      'SIL': '(https://opensource.org/licenses/OFL-1.1)',
      'NA': ''
    }
    return licenseLink[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'NA') {
  return '';
} else {
  return `## License
This project is licensed under the [${license}] license. ${renderLicenseBadge(license)}(${renderLicenseLink(license)})
`;
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

${renderLicenseSection(data.license)}

## Questions
For further inquiries, my github profile and email can be found below.
Github: (${data.username})(github.com/${data.username})
Email: ${data.email}
`;

}

module.exports = generateMarkdown;

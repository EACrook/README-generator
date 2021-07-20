// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  if(license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }

  if(license === 'GNU AGPLv3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }

  if(license === 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }

  if(license === 'GNU LGPLv3') {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  }

  if(license === 'Mozilla Public LicenseMozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }

  if(license === 'MIT License') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)`
  }

  if(license === 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }

  if(license === 'The Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }

  return `
    ${license}
  `;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
  if(license === 'Apache License 2.0') {
    return `[${license}](https://opensource.org/licenses/Apache-2.0)`   
  }

  if(license === 'GNU AGPLv3') {
    return `[${license}](https://www.gnu.org/licenses/agpl-3.0)`
  }

  if(license === 'GNU GPLv3') {
    return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`
  }

  if(license === 'GNU LGPLv3') {
    return `[${license}](https://www.gnu.org/licenses/lgpl-3.0)`
  }

  if(license === 'Mozilla Public LicenseMozilla Public License 2.0') {
    return `[${license}](https://opensource.org/licenses/MPL-2.0)`
  }

  if(license === 'MIT License') {
    return `![${license}](https://opensource.org/licenses/MIT)`
  }

  if(license === 'Boost Software License 1.0') {
    return `[![${license}](https://www.boost.org/LICENSE_1_0.txt)`
  }

  if(license === 'The Unlicense') {
    return `[![${license}](http://unlicense.org/)`
  }
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  var section = ``
  var badge = renderLicenseBadge(license)
  var link = renderLicenseLink(license)
  section += badge
  section += "\n" + link
  return section

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('DATA in generate markdown file!! make the read me', data)
return `# ${data.name}

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributing Instructions
    ${data.contributing}

    ## Test
    ${data.tests}

    ## Contact Info
    ${data.github}
    ${data.email}

    ## Link to Deployed App
    ${data.link}

    ## Lisence
    ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

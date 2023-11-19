// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return   `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } return  ''
}
    
  
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return   `[${license}](https://choosealicense.com/licenses/${license})
    `;
  } return  ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return ` ## License
    Following License applies
    ${renderLicenseLink(license)}`
  } return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ## Title
  ${data.title}
  ## Table of Contents
  ## Authors
  ${data.authors}
  ## Description
  ${data.description}
  ## Install
  ${data.install}
  ## Issues
  ${data.issues}
  ## Contributions
  ${data.contributions}
  ## Technologies
  ${data.technologies}
  ## Questions
  You can contact me via the following links with any questions
  [Github](https://github.com/${data.github})

  [Email: ${data.email}]{mailto:${data.email}}


`;
}

module.exports = generateMarkdown;

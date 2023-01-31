# Employee Directory

# Note: work in progress.  I have questions prompting, testing drawn up and a shell of an html to build off of.  I understand this is not enough and will have to continue to work on it and resubmit.  Thank you.

## Description

This application generates an employee directory using information provided by user through prompts in the terminal.

## Stack
- Node.js & Inquirer - to generate prompts to user in terminal and relate files to one another
- Jest - to run test driven development
- HTML, JavaScript, CSS

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Mock-Up

The following image shows a mock-up of the programs appearance and functionality
click the link to go to video:

[![Watch the video](https://user-images.githubusercontent.com/115671558/215643810-103a1cef-2d65-4c03-a77f-d15e3dfb50ca.png)](https://drive.google.com/file/d/1m8G07eFFiMWb_L9OTLsapQAJdUx6re4g/view)


## Installation

### Use the following in command line to run application:

```bash
node index.js
```
## Credits & Resources

### Bootstrap, Font Awesome

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

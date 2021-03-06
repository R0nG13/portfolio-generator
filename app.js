const fs = require('fs')
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

const [name, github] = profileDataArgs;


// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());

//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;


// const generatePage = (userName, githubName) => {
//   return `
//     Name: ${userName}
//     GitHub: ${githubName}
//   `;
// };

// const generatePage = (name, github) => {
//   return `
//   <!DOCTYPE html> 
//   <html lang="en"> 
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//   </head>

//   <body>
//     <h1>${name}</h1>
//     <h2><a href="https://github.com/${github}">Github</a></h2>
//   </body>
//   </html>
//   `;
// };


fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete chekout index.html to see the output!');
});

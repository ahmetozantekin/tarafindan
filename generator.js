#!/usr/bin/env node
'use strict';
var os = require('os');
const inquirer = require('inquirer');
const types = require('./types');


var questions = [
    {
      type: 'input',
      name: 'year',
      message: `Year`,
      default: new Date().getUTCFullYear()
    },
    {
      type: 'input',
      name: 'owner',
      message: "Owner",
      default: os.userInfo().username
    },
]

module.exports.default = (key) => {
    console.log(`Before generate ${key} file, you have to answer this questions:`)
    inquirer.prompt(questions).then(answers => {
        types.getLicense(key, answers['year'], answers['owner'])
    })
}
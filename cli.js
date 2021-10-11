#!/usr/bin/env node

const inquirer = require('inquirer')
const another = require('./described');
const generator = require('./generator');

const topMenu = [
    {
        key: 'mit',
        name:'MIT License'
    },
    {
        key:'gnu',
        name:'GNU GPLv3'
    },
    {
        key:'isc',
        name:'ISC License'
    },
    {
        key: 'apache',
        name:'Apache License 2.0'
    }, 
    {
        key: 'mozilla',
        name:'Mozilla Public License 2.0'
    }, 
    {
        key: 'bsd',
        name:'BSD License'
    }, 
    {
        key:'unlicense',
        name:'The Unlicense'
    },
    {
        key: 'WTFPL',
        name:'WTFPL (Do What The Fuck You Want To Public License)'
    }, 
    {
        key: 'another',
        name: 'I dont know anything, help me!'
    }, 
]

console.clear()

inquirer.prompt({
      type: 'list',
      name: 'license',
      message: 'Choose an open source license\n',
      choices: topMenu,
}).then(answers => {
    if(answers["license"] === "I dont know anything, help me!"){
        another.default()
    } else {
        generator.default(answers["license"])
    }
})

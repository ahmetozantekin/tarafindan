#!/usr/bin/env node
'use strict';

const inquirer = require('inquirer')
const generator = require('./generator');

const detailedMenu = [
    {
        key: 'apache',
        name:'Apache requires Apache License 2.0'
    }, 
    {
        key:'apache',
        name:'Cloud Native Computing Foundation dictates Apache License 2.0 by default'
    },
    {
        key:'gnu',
        name:'GNU recommends GNU GPLv3 for most programs'
    },
    {
        key:'mit',
        name:'NPM packages overwhelmingly use the MIT'
    },
    {
        key:'isc',
        name:'OpenBSD prefers the ISC License'
    },
    {
        key:'apache',
        name:'Rust crates are overwhelmingly licensed under both MIT and Apache License 2.0'
    },
    {
        key:'gnu',
        name:'WordPress plugins and themes must be GNU GPLv2 (or later)'
    }
]
module.exports.default = () => {
    console.clear()
    console.log('Which of the following best describes your situation?\n');
    console.log('If you’re contributing to or extending an existing project, it’s almost always easiest to continue using that project’s license. To find its license, look for a file called LICENSE or COPYING, and skim the project’s README. If you can’t find a license, ask the maintainers.\n');
    console.log('Depending on the original project’s license, using the same license might be a requirement, not just the easiest thing to do.\n');
    console.log('Some communities have strong preferences for particular licenses. If you want to participate in one of these, it will be easier to use their preferred license, even if you’re starting a brand new project with no existing dependencies. Some examples include:\n');

 
    inquirer.prompt({
        type: 'list',
        name: 'license',
        key: 'key',
        choices: detailedMenu,
    }).then(answers => {
        generator.default(answers["license"])
    })

}
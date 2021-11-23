'use strict';
const apache        = require('./licenses/apache');
const mit           = require('./licenses/mit');
const gnu           = require('./licenses/gnu');
const isc           = require('./licenses/isc');
const unlicense     = require('./licenses/unlicense');
const common     = require('./licenses/common');
const mozilla       = require('./licenses/mozilla');
const bsd           = require('./licenses/bsd');
const wtfpl         = require('./licenses/wtfpl');

function success(){
    console.log('\n EVET TARAFINDAN...\n')
    console.log('🥳  License file generated 🎉')
}
function error(){
    console.log('💩  Sorry, shit happens.')
}

module.exports.getLicense = (type, year, author) => {
    switch(type) {
        /** apache */ 
        case 'Apache requires Apache License 2.0':
            try {
                apache.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        case 'Apache License 2.0':
             try {
                apache.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        case 'Rust crates are overwhelmingly licensed under both MIT and Apache License 2.0':
             try {
                apache.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        case 'Cloud Native Computing Foundation dictates Apache License 2.0 by default':
             try {
                apache.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        /** gnu */   
        case 'GNU recommends GNU GPLv3 for most programs':
            try {
                gnu.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        case 'WordPress plugins and themes must be GNU GPLv2 (or later)':
              try {
                gnu.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        case 'GNU GPLv3':
              try {
                gnu.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        /** mit */ 
        case 'NPM packages overwhelmingly use the MIT':
            try {
                mit.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        case 'MIT License':
            try {
                mit.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        /** isc */ 
        case 'OpenBSD prefers the ISC License':
             try {
                isc.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        case 'ISC License':
             try {
                isc.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        /**others */
        case 'Mozilla Public License 2.0':
            try {
                mozilla.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        case 'BSD License':
            try {
                bsd.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        case 'The Unlicense':
            try {
                unlicense.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        case 'Common Development and Distribution License':
            try {
                common.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        case 'WTFPL (Do What The Fuck You Want To Public License)':
            try {
                wtfpl.createLicense(year, author)
                success()
            } catch(err){
                error()
            }
            break;
        default:
          error()
          process.kill(0)
      }
      
}

#!/usr/bin/env node

const read = require('../src/read');
const extract = require('../src/write');
const {getHelpText} = require('../src/helpTexts')

const args = process.argv;
const commands = ['read', 'extract'];


let command = '';

if(args.length < 3) {
    getHelpText();
    return;
}
else if(args.length > 5) {
    console.log('More arguments provided than expected.');
    getHelpText();
    return;
}
else {
    command = args[2]

    switch(commands.indexOf(command)) {
        case 0:
            read(args[3])
            break;
        case 1:
            extract(args[3], args[4])
            break;
        default:
            console.log('You entered a wrong command. See help text below for supported functions');
            getHelpText();
            return;
    }
}
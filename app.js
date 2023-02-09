const fs = require('fs');
const util = require('util');
const processTable = require('./ProcessTable');
const reader = util.promisify(fs.readFile);

async function readTable(pathToFile) {
    try{
        const data = await reader(pathToFile, 'utf8');
        if (data == undefined) return 'empty file';
        console.log(processTable(data));
    }catch (err) {
        console.log('BAD FILE! ', err);
    }
}

readTable('./table.csv');
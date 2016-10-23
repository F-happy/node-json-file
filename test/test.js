/**
 * Created by jonnyf on 16-10-23.
 */
"use strict";
const fs = require('fs');
const jsonTool = require('../index');

let jsonTest = jsonTool(`${__dirname}/test.json`);

if (jsonTest.select('name') !== 'example') {
    return new Error('select error');
}

if (Object.keys(jsonTest.select()).length !== 12) {
    return new Error('select error');
}

jsonTest.update({a: 'b'});
if (jsonTest.select('a') !== 'b') {
    return new Error('update error');
}

jsonTest.update('needCDN', false);

if (jsonTest.select('needCDN')) {
    return new Error('update error');
}

jsonTest.del('a');
if (Object.keys(jsonTest.select()).length !== 12) {
    return new Error('del error');
}

if (Object.keys(jsonTest.select()).length !== jsonTest.count()) {
    return new Error('count error');
}

jsonTest.save(`${__dirname}/test2.json`);
fs.exists(`${__dirname}/test2.json`, (exists)=> {
    if (!exists) {
        return new Error('save error');
    }
});

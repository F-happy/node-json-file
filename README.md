# node-json-file
[![Build Status](https://travis-ci.org/F-happy/node-json-file.svg?branch=master)](https://travis-ci.org/F-happy/node-json-file)
[![npm](https://img.shields.io/npm/v/node-json-file.svg?style=flat-square)](https://www.npmjs.com/package/node-json-file)
[![npm](https://img.shields.io/npm/l/node-json-file.svg?style=flat-square)](https://www.npmjs.com/package/node-json-file)
[![npm](https://img.shields.io/npm/dt/node-json-file.svg?style=flat-square)](https://www.npmjs.com/package/node-json-file)
> This is node runtime json file tool.

### install：
```
npm install --save node-json-file
```

### select attribute
```javascript
const jsonTool = require('node-json-file');

let jsonTest = jsonTool(`${__dirname}/test.json`);

jsonTest.select('name');

// 查找全部属性
jsonTest.select();
```

### update attribute
> Updated after the json object does not really save the original file, need to invoke the sava method to ```save()``` another.

```javascript
const jsonTool = require('node-json-file');

let jsonTest = jsonTool(`${__dirname}/test.json`);

jsonTest.update({a: 'b'});

// update one attr
jsonTest.update('a', false);
```

### delete attribute
```javascript
const jsonTool = require('node-json-file');

let jsonTest = jsonTool(`${__dirname}/test.json`);

jsonTest.del('a');
```

### get all attribute number
```javascript
const jsonTool = require('node-json-file');

let jsonTest = jsonTool(`${__dirname}/test.json`);

jsonTest.count();
```

### save json object
```javascript
const jsonTool = require('node-json-file');

let jsonTest = jsonTool(`${__dirname}/test.json`);

jsonTest.save(`${__dirname}/test2.json`);

// save original file
jsonTest.save();
```

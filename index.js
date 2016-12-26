/**
 * 操作 json 文件的工具库
 * Created by jonnyf on 16-10-23.
 */
"use strict";
const fs = require('fs');
const path = require('path');

class NodeJson {
    constructor(filePath) {
        if (path.parse(filePath).ext === '.json') {
            this.rootPath = filePath;
            this.json = JSON.parse(fs.readFileSync(this.rootPath));
        } else {
            return new Error('file is not json');
        }
    }

    select(attr = 'all') {
        if (attr === 'all') {
            return this.json;
        } else {
            return this.json[attr] || null;
        }
    }

    update(...obj) {
        if (obj.length === 1 && typeof obj === 'object') {
            Object.keys(obj[0]).forEach((v)=> {
                this.json[v] = obj[0][v];
            });
        } else if (typeof obj[0] === 'string') {
            let [key, value] = [obj[0], obj[1]];
            this.json[key] = value;
        } else {
            return null;
        }
        return this.json;
    }

    save(name = this.rootPath) {
        fs.writeFile(name, JSON.stringify(this.json, null, 4), (err)=> {
            return err ? err : true;
        });
    }

    del(key) {
        delete this.json[key];
        return this.json;
    }

    count() {
        return Object.keys(this.json).length;
    }

    find(key, obj = this.json) {
        let keys = Object.keys(obj);
        if (keys.indexOf(key) !== -1) {
            return obj[key];
        } else {
            for (let i = 0; i < keys.length; i++) {
                if (Object.prototype.toString.call(obj[keys[i]]) === '[object Object]') {
                    return this.find(key, obj[keys[i]]);
                }
            }
        }
    }
}

module.exports = (filePath)=> {
    return new NodeJson(filePath);
};

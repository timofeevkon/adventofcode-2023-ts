"use strict";
const fs = require("fs");
const path = require("node:path");


const input = String(fs.readFileSync(path.join('/mnt/data/1.csv'))).trim().split("\n")
const result = input.map(e => e
    .replace(/one/g, 'one1one')
    .replace(/two/g, 'two2two')
    .replace(/three/g, 'three3three')
    .replace(/four/g, 'four4four')
    .replace(/five/g, 'five5five')
    .replace(/six/g, 'six6six')
    .replace(/seven/g, 'seven7seven')
    .replace(/eight/g, 'eight8eight')
    .replace(/nine/g, 'nine9nine'))

const finish = result.map(e => Number(e.replace(/\D/g, "")[0] + e.replace(/\D/g, "")
    .slice(-1))).reduce((a, b) => a + b);
console.log("sum: " + finish);
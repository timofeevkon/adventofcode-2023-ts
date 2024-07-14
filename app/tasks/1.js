"use strict";
const fs = require("fs");
const path = require("node:path");

const input = String(fs.readFileSync(path.join('/mnt/data/1.csv'))).trim().split("\n");
const result = input.map(e => Number(e.replace(/\D/g, "")[0] + e.replace(/\D/g, "")
    .slice(-1))).reduce((a, b) => a + b);
console.log("sum: " + result);
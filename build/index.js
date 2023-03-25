"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResults_1 = require("./utils/MatchResults");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] == MatchResults_1.matchWin.homwWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] == MatchResults_1.matchWin.awayWin) {
        manUnitedWins++;
    }
}
console.log(reader.data);
console.log(manUnitedWins);

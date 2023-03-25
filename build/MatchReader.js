"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const StringToDate_1 = require("./utils/StringToDate");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        return [
            (0, StringToDate_1.StringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;

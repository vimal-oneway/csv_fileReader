"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringToDate = void 0;
const StringToDate = (dateString) => {
    // ? dateString = 28/10/2018 -> dateParts = [28,10,2018] 
    const dateParts = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.StringToDate = StringToDate;

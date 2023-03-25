import { CsvFileReader } from "./CsvFileReader";
 import { matchWin } from "./utils/MatchResults";
const reader = new CsvFileReader("football.csv");
reader.read();



let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] == matchWin.homwWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] == matchWin.awayWin) {
    manUnitedWins++;
  }
}
console.log(reader.data);

console.log(manUnitedWins);

import { CsvFileReader } from "./CsvFileReader";
import { StringToDate } from "./utils/StringToDate";
import { matchWin } from "./utils/MatchResults";

export type MatchData = [
    Date,
    string,
    string,
    number,
    number,
    matchWin,
    string
  ];
  
export class MatchReader extends CsvFileReader<MatchData>{
  mapRow(row: string[]): MatchData {
    return [
      StringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as matchWin,
      row[6],
    ];
  }
}

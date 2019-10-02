import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// Create an instance of MatchReader and pass in sth satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCSV("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Wolves");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

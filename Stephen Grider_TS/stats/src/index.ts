import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { ConsoleReport } from "./Reporter/ConsoleReport";

// Create an object that satisfies the "DataReader" interface
const csvFileReader = new CSVFileReader("football.csv");

// Create an instance of MatchReader and pass in sth satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const winsAnalysis = new WinsAnalysis("Man United");
const consoleReport = new ConsoleReport();
const summary = new Summary(winsAnalysis, consoleReport);
summary.buildAndPrintReport(matchReader.matches);

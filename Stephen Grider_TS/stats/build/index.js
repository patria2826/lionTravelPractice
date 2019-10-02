"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CSVFileReader_1 = require("./CSVFileReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
var ConsoleReport_1 = require("./Reporter/ConsoleReport");
// Create an object that satisfies the "DataReader" interface
var csvFileReader = new CSVFileReader_1.CSVFileReader("football.csv");
// Create an instance of MatchReader and pass in sth satisfying the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var winsAnalysis = new WinsAnalysis_1.WinsAnalysis("Man United");
var consoleReport = new ConsoleReport_1.ConsoleReport();
var summary = new Summary_1.Summary(winsAnalysis, consoleReport);
summary.buildAndPrintReport(matchReader.matches);

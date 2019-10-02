"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// Create an instance of MatchReader and pass in sth satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCSV("football.csv");
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Wolves");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

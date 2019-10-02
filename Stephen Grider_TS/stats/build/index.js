"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CSVFileReader_1 = require("./CSVFileReader");
// Create an object that satisfies the "DataReader" interface
var csvFileReader = new CSVFileReader_1.CSVFileReader("football.csv");
// Create an instance of MatchReader and pass in sth satisfying the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();

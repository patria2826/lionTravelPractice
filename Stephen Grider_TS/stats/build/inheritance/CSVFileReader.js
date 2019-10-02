"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs")); //npm install @types/node
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CSVFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8"
        })
            .split("\n")
            .map(function (row) {
            return row.split(",");
        })
            .map(this.mapRow);
    };
    return CSVFileReader;
}());
exports.CSVFileReader = CSVFileReader;

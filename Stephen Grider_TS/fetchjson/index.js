"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos";
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    todo.map(function (ele) {
        console.log("The Todo with ID:" + Object.values(ele)[1] + " has a title of: " + Object.values(ele)[2] + "\n      " + (Object.values(ele)[3] ? "Done." : "Not done yet.") + "\n        ");
    });
});

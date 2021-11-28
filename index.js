const fs = require("fs");
const parser = require("xml2json");

const data = fs.readFileSync("a19_config/items.xml");

const jsonData = parser.toJson(data);
console.log("jsonData", jsonData);

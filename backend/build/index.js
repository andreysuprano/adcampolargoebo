"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var routes_1 = require("./routes");
var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var app = express();
app.listen(port);
typeorm_1.createConnection();
app.use(bodyParser.json());
app.use(routes_1.default);
//# sourceMappingURL=index.js.map
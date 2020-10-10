import "reflect-metadata";
import { createConnection } from 'typeorm';
import routes from "./routes";
import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();
app.listen(3333);
createConnection();
app.use(bodyParser.json());
app.use(routes);

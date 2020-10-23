import "reflect-metadata";
import { createConnection } from 'typeorm';
import routes from "./routes";
import * as express from "express";
import * as bodyParser from "body-parser";

const port = process.env.PORT || 3000;
const app = express();

app.listen(port);
createConnection();
app.use(bodyParser.json());
app.use(routes);

import cors from "cors";
import { Express } from "express";

export default (app: Express) => {
  app.use(cors());
};

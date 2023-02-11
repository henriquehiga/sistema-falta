import express, { Express, json } from "express";
import setupRoutes from "../config/routes";
import setupMiddlewares from "../config/middlewares";

export const setupApp = async (): Promise<Express> => {
  const app = express();
  app.use(json());
  setupMiddlewares(app);
  setupRoutes(app);
  return app;
};

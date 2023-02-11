import { adaptRoute } from "../adapters/express-route-adapter";
import { makeNovoProfessorController } from "../factories/novo-professor-controller-factory";
import { Router } from "express";

export default (router: Router) => {
  router.post("/novo-professor", adaptRoute(makeNovoProfessorController()));
};

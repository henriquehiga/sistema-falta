import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeDeletaProfessorController } from "../factories/deleta-professor-controller-factory";
import { makeNovoProfessorController } from "../factories/novo-professor-controller-factory";
import { makeResgataProfessoresController } from "../factories/resgata-professores-controller-factory";

export default (router: Router) => {
  router.post("/professor", adaptRoute(makeNovoProfessorController()));
  router.get("/professor", adaptRoute(makeResgataProfessoresController()));
  router.delete("/professor/:id", adaptRoute(makeDeletaProfessorController()));
};

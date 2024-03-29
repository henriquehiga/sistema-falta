import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeDeletaTurmaController } from "../factories/deleta-turma-controller-factory";
import { makeNovaTurmaController } from "../factories/nova-turma-controller-factory";
import { makeResgataTurmasController } from "../factories/resgata-turmas-controller-factory";

export default (router: Router) => {
  router.post("/turma", adaptRoute(makeNovaTurmaController()));
  router.get("/turma", adaptRoute(makeResgataTurmasController()));
  router.delete("/turma/:id", adaptRoute(makeDeletaTurmaController()));
};

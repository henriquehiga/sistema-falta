import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeNovaTurmaController } from "../factories/nova-turma-controller-factory";

export default (router: Router) => {
  router.post("/turma", adaptRoute(makeNovaTurmaController()));
};

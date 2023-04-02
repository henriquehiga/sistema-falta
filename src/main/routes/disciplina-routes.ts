import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeNovaDisciplinaController } from "../factories/nova-disciplina-controller-factory";
import { makeResgataDisciplinasController } from "../factories/resgata-disciplinas-controller-factory";

export default (router: Router) => {
  router.post("/disciplina", adaptRoute(makeNovaDisciplinaController()));
  router.get("/disciplina", adaptRoute(makeResgataDisciplinasController()));
};

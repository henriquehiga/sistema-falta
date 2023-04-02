import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeNovaDisciplinaController } from "../factories/nova-disciplina-controller-factory";

export default (router: Router) => {
  router.post("/disciplina", adaptRoute(makeNovaDisciplinaController()));
};

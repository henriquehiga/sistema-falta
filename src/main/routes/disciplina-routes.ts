import { adaptRoute } from "../adapters/express-route-adapter";
import { Router } from "express";
import { makeNovaDisciplinaController } from "../factories/nova-disciplina-controller-factory";

export default (router: Router) => {
  router.post("/nova-disciplina", adaptRoute(makeNovaDisciplinaController()));
};

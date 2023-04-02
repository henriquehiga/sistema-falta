import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeNovoAlunoController } from "../factories/novo-aluno-controller-factory";

export default (router: Router) => {
  router.post("/aluno", adaptRoute(makeNovoAlunoController()));
};

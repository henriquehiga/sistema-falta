import { adaptRoute } from "../adapters/express-route-adapter";
import { makeNovoAlunoController } from "../factories/novo-aluno-controller-factory";
import { Router } from "express";

export default (router: Router) => {
  router.post("/novo-aluno", adaptRoute(makeNovoAlunoController()));
};

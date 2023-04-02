import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeNovoAlunoController } from "../factories/novo-aluno-controller-factory";
import { makeResgataAlunosController } from "../factories/resgata-alunos-controller-factory";

export default (router: Router) => {
  router.post("/aluno", adaptRoute(makeNovoAlunoController()));
  router.get("/aluno", adaptRoute(makeResgataAlunosController()));
};

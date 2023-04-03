import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeDeletaAlunoController } from "../factories/deleta-aluno-controller-factory";
import { makeNovoAlunoController } from "../factories/novo-aluno-controller-factory";
import { makeResgataAlunosController } from "../factories/resgata-alunos-controller-factory";
import { makeResgataAlunosPorTurmaController } from "../factories/resgata-alunos-por-turma-controller-factory";

export default (router: Router) => {
  router.post("/aluno", adaptRoute(makeNovoAlunoController()));
  router.get("/aluno", adaptRoute(makeResgataAlunosController()));
  router.delete("/aluno/:id", adaptRoute(makeDeletaAlunoController()));
  router.get(
    "/aluno/:idTurma",
    adaptRoute(makeResgataAlunosPorTurmaController())
  );
};

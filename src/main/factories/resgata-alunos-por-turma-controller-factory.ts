import { PrismaAlunoRepository } from "../../data/prisma/prisma-aluno-repository";
import { ResgataAlunosPorTurma } from "../../domain/usecases/resgata-alunos-por-turma";
import { ResgataAlunosPorTurmaController } from "../../presentations/controllers/resgata-alunos-por-turma-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeResgataAlunosPorTurmaController = (): Controller => {
  const repository = new PrismaAlunoRepository();
  const usecase = new ResgataAlunosPorTurma(repository);
  return new ResgataAlunosPorTurmaController(usecase);
};

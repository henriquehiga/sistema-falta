import { PrismaAlunoRepository } from "../../data/prisma/prisma-aluno-repository";
import { NovoAluno } from "../../domain/usecases/novo-aluno";
import { NovoAlunoController } from "../../presentations/controllers/novo-aluno-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeNovoAlunoController = (): Controller => {
  const repository = new PrismaAlunoRepository();
  const usecase = new NovoAluno(repository);
  return new NovoAlunoController(usecase);
};

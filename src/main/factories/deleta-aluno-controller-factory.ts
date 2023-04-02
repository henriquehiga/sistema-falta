import { PrismaAlunoRepository } from "../../data/prisma/prisma-aluno-repository";
import { DeletaAluno } from "../../domain/usecases/deleta-aluno";
import { DeletaAlunoController } from "../../presentations/controllers/deleta-aluno-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeDeletaAlunoController = (): Controller => {
  const alunoRepository = new PrismaAlunoRepository();
  const usecase = new DeletaAluno(alunoRepository);
  return new DeletaAlunoController(usecase);
};

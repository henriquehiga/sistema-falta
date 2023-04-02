import { PrismaAlunoRepository } from "../../data/prisma/prisma-aluno-repository";
import { ResgataAlunos } from "../../domain/usecases/resgata-alunos";
import { ResgataAlunosController } from "../../presentations/controllers/resgata-alunos-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeResgataAlunosController = (): Controller => {
  const repository = new PrismaAlunoRepository();
  const usecase = new ResgataAlunos(repository);
  return new ResgataAlunosController(usecase);
};

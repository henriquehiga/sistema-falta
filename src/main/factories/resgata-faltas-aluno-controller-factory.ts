import { PrismaFaltaRepository } from "../../data/prisma/prisma-falta-repository";
import { ResgataFaltasAluno } from "../../domain/usecases/resgata-faltas-aluno";
import { ResgataFaltasAlunoController } from "../../presentations/controllers/resgata-faltas-aluno-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeResgataFaltasController = (): Controller => {
  const repository = new PrismaFaltaRepository();
  const usecase = new ResgataFaltasAluno(repository);
  return new ResgataFaltasAlunoController(usecase);
};

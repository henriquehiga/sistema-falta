import { PrismaDisciplinaRepository } from "./../../data/prisma/prisma-disciplina-repository";
import { PrismaAlunoRepository } from "../../data/prisma/prisma-aluno-repository";
import { PrismaAulaRepository } from "../../data/prisma/prisma-aula-repository";
import { PrismaFaltaRepository } from "../../data/prisma/prisma-falta-repository";
import { NovaFalta } from "../../domain/usecases/nova-falta";
import { NovaFaltaController } from "../../presentations/controllers/nova-falta-controller";
import { Controller } from "../../presentations/protocols/controller";
import { ResgataFaltasAluno } from "../../domain/usecases/resgata-faltas-aluno";

export const makeNovaFaltaController = (): Controller => {
  const faltaRepository = new PrismaFaltaRepository();
  const aulaRepository = new PrismaAulaRepository();
  const alunoRepository = new PrismaAlunoRepository();
  const disciplinaRepository = new PrismaDisciplinaRepository();
  const resgataFaltasAlunoUsecase = new ResgataFaltasAluno(faltaRepository);
  const usecase = new NovaFalta(
    faltaRepository,
    aulaRepository,
    alunoRepository,
    disciplinaRepository,
    resgataFaltasAlunoUsecase
  );
  return new NovaFaltaController(usecase);
};

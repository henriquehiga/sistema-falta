import { PrismaAlunoRepository } from "../../data/prisma/prisma-aluno-repository";
import { PrismaAulaRepository } from "../../data/prisma/prisma-aula-repository";
import { PrismaFaltaRepository } from "../../data/prisma/prisma-falta-repository";
import { NovaFalta } from "../../domain/usecases/nova-falta";
import { NovaFaltaController } from "../../presentations/controllers/nova-falta-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeNovaFaltaController = (): Controller => {
  const faltaRepository = new PrismaFaltaRepository();
  const aulaRepository = new PrismaAulaRepository();
  const alunoRepository = new PrismaAlunoRepository();
  const usecase = new NovaFalta(
    faltaRepository,
    aulaRepository,
    alunoRepository
  );
  return new NovaFaltaController(usecase);
};

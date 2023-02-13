import { PrismaAulaRepository } from "../../data/prisma/prisma-aula-repository";
import { PrismaDisciplinaRepository } from "../../data/prisma/prisma-disciplina-repository";
import { PrismaProfessorRepository } from "../../data/prisma/prisma-professor-repository";
import { NovaAula } from "../../domain/usecases/nova-aula";
import { NovaAulaController } from "../../presentations/controllers/nova-aula-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeNovaAulaController = (): Controller => {
  const aulaRepository = new PrismaAulaRepository();
  const professorRepository = new PrismaProfessorRepository();
  const disciplinaRepository = new PrismaDisciplinaRepository();
  const usecase = new NovaAula(
    aulaRepository,
    professorRepository,
    disciplinaRepository
  );
  return new NovaAulaController(usecase);
};

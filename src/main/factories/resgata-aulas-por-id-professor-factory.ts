import { PrismaAulaRepository } from "../../data/prisma/prisma-aula-repository";
import { ResgataAulasPorIdProfessor } from "../../domain/usecases/resgata-aulas-por-id-professor";
import { ResgataAulasPorIdProfessorController } from "../../presentations/controllers/resgata-aulas-por-id-professor-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeResgataAulasPorIdProfessor = (): Controller => {
  const repository = new PrismaAulaRepository();
  const usecase = new ResgataAulasPorIdProfessor(repository);
  return new ResgataAulasPorIdProfessorController(usecase);
};

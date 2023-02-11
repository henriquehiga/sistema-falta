import { PrismaProfessorRepository } from "../../data/prisma/prisma-professor-repository";
import { NovoProfessor } from "../../domain/usecases/novo-professor";
import { NovoProfessorController } from "../../presentations/controllers/novo-professor-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeNovoProfessorController = (): Controller => {
  const repository = new PrismaProfessorRepository();
  const usecase = new NovoProfessor(repository);
  return new NovoProfessorController(usecase);
};

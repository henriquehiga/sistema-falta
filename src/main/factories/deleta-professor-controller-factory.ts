import { PrismaProfessorRepository } from "../../data/prisma/prisma-professor-repository";
import { DeletaProfessor } from "../../domain/usecases/deleta-professor";
import { DeletaProfessorController } from "../../presentations/controllers/deleta-professor-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeDeletaProfessorController = (): Controller => {
  const professorRepository = new PrismaProfessorRepository();
  const usecase = new DeletaProfessor(professorRepository);
  return new DeletaProfessorController(usecase);
};

import { PrismaProfessorRepository } from "../../data/prisma/prisma-professor-repository";
import { ResgataProfessores } from "../../domain/usecases/resgata-professores";
import { Controller } from "../../presentations/protocols/controller";
import { ResgataProfessoresController } from "./../../presentations/controllers/resgata-professor-controller";

export const makeResgataProfessoresController = (): Controller => {
  const repository = new PrismaProfessorRepository();
  const usecase = new ResgataProfessores(repository);
  return new ResgataProfessoresController(usecase);
};

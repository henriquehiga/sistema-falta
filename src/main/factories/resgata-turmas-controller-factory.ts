import { PrismaTurmaRepository } from "../../data/prisma/prisma-turma-repository";
import { ResgataTurmas } from "../../domain/usecases/resgata-turmas";
import { ResgataTurmasController } from "../../presentations/controllers/resgata-turmas-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeResgataTurmasController = (): Controller => {
  const repository = new PrismaTurmaRepository();
  const usecase = new ResgataTurmas(repository);
  return new ResgataTurmasController(usecase);
};

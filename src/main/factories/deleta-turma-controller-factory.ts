import { PrismaTurmaRepository } from "../../data/prisma/prisma-turma-repository";
import { DeletaTurma } from "../../domain/usecases/deleta-turma";
import { DeletaTurmaController } from "../../presentations/controllers/deleta-turma-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeDeletaTurmaController = (): Controller => {
  const turmaRepository = new PrismaTurmaRepository();
  const usecase = new DeletaTurma(turmaRepository);
  return new DeletaTurmaController(usecase);
};

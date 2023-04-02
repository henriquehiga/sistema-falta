import { PrismaTurmaRepository } from "../../data/prisma/prisma-turma-repository";
import { NovaTurma } from "../../domain/usecases/nova-turma";
import { NovaTurmaController } from "../../presentations/controllers/nova-turma-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeNovaTurmaController = (): Controller => {
  const repository = new PrismaTurmaRepository();
  const usecase = new NovaTurma(repository);
  return new NovaTurmaController(usecase);
};

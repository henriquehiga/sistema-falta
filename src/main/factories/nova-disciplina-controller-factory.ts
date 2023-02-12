import { PrismaDisciplinaRepository } from "../../data/prisma/disciplina-repository";
import { NovaDisciplina } from "../../domain/usecases/nova-disciplina";
import { NovaDisciplinaController } from "../../presentations/controllers/nova-disciplina-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeNovaDisciplinaController = (): Controller => {
  const repository = new PrismaDisciplinaRepository();
  const usecase = new NovaDisciplina(repository);
  return new NovaDisciplinaController(usecase);
};

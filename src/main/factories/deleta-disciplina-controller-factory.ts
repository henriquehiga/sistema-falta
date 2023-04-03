import { PrismaDisciplinaRepository } from "../../data/prisma/prisma-disciplina-repository";
import { DeletaDisciplina } from "../../domain/usecases/deleta-disciplina";
import { DeletaDisciplinaController } from "../../presentations/controllers/deleta-disciplina-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeDeletaDisciplinaController = (): Controller => {
  const disciplinaRepository = new PrismaDisciplinaRepository();
  const usecase = new DeletaDisciplina(disciplinaRepository);
  return new DeletaDisciplinaController(usecase);
};

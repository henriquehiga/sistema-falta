import { PrismaDisciplinaRepository } from "../../data/prisma/prisma-disciplina-repository";
import { ResgataDisciplinas } from "../../domain/usecases/resgata-disciplinas";
import { ResgataDisciplinasController } from "../../presentations/controllers/resgata-disciplinas-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeResgataDisciplinasController = (): Controller => {
  const repository = new PrismaDisciplinaRepository();
  const usecase = new ResgataDisciplinas(repository);
  return new ResgataDisciplinasController(usecase);
};

import { PrismaAulaRepository } from "../../data/prisma/prisma-aula-repository";
import { ResgataAulas } from "../../domain/usecases/resgata-aulas";
import { ResgataAulasController } from "../../presentations/controllers/resgata-aulas-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeResgataAulasController = (): Controller => {
  const repository = new PrismaAulaRepository();
  const usecase = new ResgataAulas(repository);
  return new ResgataAulasController(usecase);
};

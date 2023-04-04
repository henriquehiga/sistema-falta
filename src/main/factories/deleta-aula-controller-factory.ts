import { DeletaAula } from "../../domain/usecases/deleta-aula";
import { DeletaAulaController } from "../../presentations/controllers/deleta-aula-controller";
import { Controller } from "../../presentations/protocols/controller";
import { PrismaAulaRepository } from "./../../data/prisma/prisma-aula-repository";

export const makeDeletaAulaController = (): Controller => {
  const aulaRepository = new PrismaAulaRepository();
  const usecase = new DeletaAula(aulaRepository);
  return new DeletaAulaController(usecase);
};

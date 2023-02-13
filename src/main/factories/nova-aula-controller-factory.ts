import { PrismaAulaRepository } from "../../data/prisma/prisma-aula-repository";
import { NovaAula } from "../../domain/usecases/nova-aula";
import { NovaAulaController } from "../../presentations/controllers/nova-aula-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeNovaAulaController = (): Controller => {
  const repository = new PrismaAulaRepository();
  const usecase = new NovaAula(repository);
  return new NovaAulaController(usecase);
};

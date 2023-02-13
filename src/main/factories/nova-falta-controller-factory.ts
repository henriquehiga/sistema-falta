import { PrismaFaltaRepository } from "../../data/prisma/prisma-falta-repository";
import { NovaFalta } from "../../domain/usecases/nova-falta";
import { NovaFaltaController } from "../../presentations/controllers/nova-falta-controller";
import { Controller } from "../../presentations/protocols/controller";

export const makeNovaFaltaController = (): Controller => {
  const repository = new PrismaFaltaRepository();
  const usecase = new NovaFalta(repository);
  return new NovaFaltaController(usecase);
};

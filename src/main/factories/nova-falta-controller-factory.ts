import { PrismaAlunoRepository } from "../../data/prisma/prisma-aluno-repository";
import { PrismaAulaRepository } from "../../data/prisma/prisma-aula-repository";
import { PrismaFaltaRepository } from "../../data/prisma/prisma-falta-repository";
import { NotificaLimiteFaltas } from "../../domain/usecases/notifica-limite-faltas";
import { NovaFalta } from "../../domain/usecases/nova-falta";
import { ResgataFaltasAluno } from "../../domain/usecases/resgata-faltas-aluno";
import { NovaFaltaController } from "../../presentations/controllers/nova-falta-controller";
import { Controller } from "../../presentations/protocols/controller";
import { NodemailerAdapter } from "../adapters/nodemailer-adapter";
import { PrismaDisciplinaRepository } from "./../../data/prisma/prisma-disciplina-repository";

export const makeNovaFaltaController = (): Controller => {
  const faltaRepository = new PrismaFaltaRepository();
  const aulaRepository = new PrismaAulaRepository();
  const alunoRepository = new PrismaAlunoRepository();
  const disciplinaRepository = new PrismaDisciplinaRepository();
  const resgataFaltasAlunoUsecase = new ResgataFaltasAluno(faltaRepository);
  const nodemailerAdapter = new NodemailerAdapter();
  const notificaLimiteFaltasUsecase = new NotificaLimiteFaltas(
    nodemailerAdapter
  );
  const usecase = new NovaFalta(
    faltaRepository,
    aulaRepository,
    alunoRepository,
    disciplinaRepository,
    resgataFaltasAlunoUsecase,
    notificaLimiteFaltasUsecase
  );
  return new NovaFaltaController(usecase);
};

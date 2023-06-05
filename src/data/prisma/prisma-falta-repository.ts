import { FaltaModel } from "../../domain/entities/models/falta-model";
import { prisma } from "../../main/infra/prisma/prisma";
import { FaltaRepository } from "./../falta-repository";

export class PrismaFaltaRepository implements FaltaRepository {
  private prisma = prisma;

  async salvar(data: FaltaModel.Model): Promise<FaltaModel.Model> {
    try {
      const created = await this.prisma.falta.create({
        data,
      });
      return created;
    } catch (err) {
      throw new Error(err);
    }
  }

  async resgataPorId(id: string): Promise<FaltaModel.Model> {
    try {
      const found = await this.prisma.falta.findFirst({
        where: {
          id,
        },
      });
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }

  async resgataPorIdAluno(id: string): Promise<FaltaModel.Model[]> {
    try {
      let found = await this.prisma.falta.findMany({
        where: {
          aluno_id: id,
        },
        include: {
          aula: true,
          aluno: true,
        },
      });
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }

  async resgataPorIdAula(id: string): Promise<FaltaModel.Model[]> {
    try {
      let found = await this.prisma.falta.findMany({
        where: {
          aula_id: id,
        },
      });
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }
}

import { FaltaRepository } from "./../falta-repository";
import { prisma } from "../../main/infra/prisma/prisma";
import { FaltaModel } from "../../domain/entities/models/falta-model";

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
}

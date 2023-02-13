import { AulaModel } from "../../domain/entities/models/aula-model";
import { prisma } from "../../main/infra/prisma/prisma";
import { AulaRepository } from "../aula-repository";

export class PrismaAulaRepository implements AulaRepository {
  private prisma = prisma;

  async salvar(data: AulaModel.Model): Promise<AulaModel.Model> {
    try {
      const created = await this.prisma.aula.create({
        data,
      });
      return created;
    } catch (err) {
      throw new Error(err);
    }
  }
}

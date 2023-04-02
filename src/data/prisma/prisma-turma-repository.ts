import { prisma } from "../../main/infra/prisma/prisma";
import { TurmaRepository } from "../turma-repository";

export class PrismaTurmaRepository implements TurmaRepository {
  private prisma = prisma;

  async salvar(data: TurmaModel.Model): Promise<TurmaModel.Model> {
    try {
      const created = await this.prisma.turma.create({
        data,
      });
      return created;
    } catch (err) {
      throw new Error(err);
    }
  }

  async resgataPorId(id: string): Promise<TurmaModel.Model> {
    try {
      const found = await this.prisma.turma.findFirst({
        where: {
          id,
        },
      });
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }

  async resgataTurmas(): Promise<TurmaModel.Model[]> {
    try {
      const found = await this.prisma.turma.findMany();
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleta(id: string): Promise<void> {
    try {
      await this.prisma.turma.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}

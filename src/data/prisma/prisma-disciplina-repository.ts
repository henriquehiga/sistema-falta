import { DisciplinaModel } from "../../domain/entities/models/disciplina-model";
import { prisma } from "../../main/infra/prisma/prisma";
import { DisciplinaRepository } from "../disciplina-repository";

export class PrismaDisciplinaRepository implements DisciplinaRepository {
  private prisma = prisma;

  async salvar(data: DisciplinaModel.Model): Promise<DisciplinaModel.Model> {
    try {
      const created = await this.prisma.disciplina.create({
        data,
      });
      return created;
    } catch (err) {
      throw new Error(err);
    }
  }

  async resgataPorId(id: string): Promise<DisciplinaModel.Model> {
    try {
      const found = await this.prisma.disciplina.findFirst({
        where: {
          id,
        },
      });
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }

  async lista(): Promise<DisciplinaModel.Model[]> {
    try {
      const found = await this.prisma.disciplina.findMany();
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }
}

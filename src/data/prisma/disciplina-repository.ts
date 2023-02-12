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
}

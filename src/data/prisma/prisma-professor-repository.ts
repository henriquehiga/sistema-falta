import { ProfessorModel } from "../../domain/entities/models/professor-model";
import { prisma } from "../../main/infra/prisma/prisma";
import { ProfessorRepository } from "../professor-repository";

export class PrismaProfessorRepository implements ProfessorRepository {
  private prisma = prisma;

  async salvar(data: ProfessorModel.Model): Promise<ProfessorModel.Model> {
    try {
      const created = await this.prisma.professor.create({
        data,
      });
      return created;
    } catch (err) {
      throw new Error(err);
    }
  }
}

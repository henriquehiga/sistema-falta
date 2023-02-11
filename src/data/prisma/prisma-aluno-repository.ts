import { AlunoModel } from "../../domain/entities/models/aluno-model";
import { prisma } from "../../main/infra/prisma/prisma";
import { AlunoRepository } from "../aluno-repository";

export class PrismaAlunoRepository implements AlunoRepository {
  private prisma = prisma;

  async salvar(data: AlunoModel.Model): Promise<AlunoModel.Model> {
    try {
      const created = await this.prisma.aluno.create({
        data,
      });
      return created;
    } catch (err) {
      throw new Error(err);
    }
  }
}

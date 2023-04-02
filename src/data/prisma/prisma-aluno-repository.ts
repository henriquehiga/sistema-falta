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

  async resgataPorId(id: string): Promise<AlunoModel.Model> {
    try {
      const found = await this.prisma.aluno.findFirst({
        where: {
          id,
        },
      });
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }

  async lista(): Promise<AlunoModel.Model[]> {
    try {
      const found = await this.prisma.aluno.findMany();
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }
}

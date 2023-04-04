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

  async excluir(id: string): Promise<void> {
    try {
      await this.prisma.aluno.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async resgataPorTurma(id: string): Promise<AlunoModel.Model[]> {
    try {
      const found = await this.prisma.aluno.findMany({
        where: {
          turma_id: id,
        },
      });
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }

  async editar(id: string, data: AlunoModel.Model): Promise<AlunoModel.Model> {
    try {
      const updated = await this.prisma.aluno.update({
        where: {
          id,
        },
        data,
      });
      return updated;
    } catch (err) {
      throw new Error(err);
    }
  }
}

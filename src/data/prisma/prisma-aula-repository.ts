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

  async resgataPorId(id: string): Promise<AulaModel.Model> {
    try {
      const found = await this.prisma.aula.findFirst({
        where: {
          id,
        },
      });
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }

  async professorIdPorDiscilpinaId(
    professor_id: string,
    disciplina_id: string
  ): Promise<AulaModel.Model> {
    try {
      const found = await this.prisma.aula.findFirst({
        where: {
          disciplina_id,
          AND: {
            professor_id,
          },
        },
      });
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }

  async lista(): Promise<AulaModel.Model[]> {
    try {
      const found = await this.prisma.aula.findMany();
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }

  async resgataPorIdProfessor(idProfessor: string): Promise<AulaModel.Model[]> {
    try {
      const found = await this.prisma.aula.findMany({
        where: {
          professor_id: idProfessor,
        },
      });
      return found;
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleta(id: string): Promise<void> {
    try {
      await this.prisma.aula.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}

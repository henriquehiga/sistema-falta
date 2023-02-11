import { ProfessorRepository } from "./../professor-repository";
import { ProfessorModel } from "../../domain/entities/models/professor-model";
import { test, expect, vitest } from "vitest";
import { prisma } from "../../main/infra/prisma/prisma";

const stubPrismaClient = () => {
  const prismaClient = prisma;
  prismaClient.$use(async (params, next) => {
    return {
      id: "valid-uuid",
      email: "validemail@mail.com",
      nome: "valid name",
    } as ProfessorModel.Model;
  });
  return prismaClient;
};

type SutTypes = {
  sut: ProfessorRepository;
};

const makeSut = (): SutTypes => {
  class PrismaRepositoryStub implements ProfessorRepository {
    async salvar(data: ProfessorModel.Model): Promise<ProfessorModel.Model> {
      try {
        const created = await stubPrismaClient().professor.create({
          data,
        });
        return created;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
  return {
    sut: new PrismaRepositoryStub(),
  };
};

test("Espero salvar novo professor", async () => {
  const { sut } = makeSut();
  const professor: ProfessorModel.Model = {
    id: "valid-uuid",
    email: "validemail@mail.com",
    nome: "valid name",
  };
  const professorCriado = await sut.salvar(professor);
  expect(professorCriado.id).toBe("valid-uuid");
});

test("Espero lançar erro caso professor já exista", async () => {
  const { sut } = makeSut();
  const professor: ProfessorModel.Model = {
    id: "valid-uuid",
    email: "validemail@mail.com",
    nome: "valid name",
  };
  const professorDuplicado: ProfessorModel.Model = {
    id: "valid-uuid",
    email: "validemail@mail.com",
    nome: "valid name",
  };
  await sut.salvar(professor);
  vitest
    .spyOn(sut, "salvar")
    .mockRejectedValue(new Error("Usuário já existe!"));
  await expect(sut.salvar(professorDuplicado)).rejects.toThrow();
});

import { AlunoRepository } from "./../aluno-repository";
import { AlunoModel } from "../../domain/entities/models/aluno-model";
import { test, expect, vitest } from "vitest";
import { prisma } from "../../main/infra/prisma/prisma";

const stubPrismaClient = () => {
  const prismaClient = prisma;
  prismaClient.$use(async (params, next) => {
    return {
      id: "valid-uuid",
      email: "validemail@mail.com",
      nome: "valid name",
      turma: "valid class",
    } as AlunoModel.Model;
  });
  return prismaClient;
};

type SutTypes = {
  sut: AlunoRepository;
};

const makeSut = (): SutTypes => {
  class PrismaRepositoryStub implements AlunoRepository {
    async salvar(data: AlunoModel.Model): Promise<AlunoModel.Model> {
      try {
        const created = await stubPrismaClient().aluno.create({
          data: data,
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

test("Espero salvar novo aluno", async () => {
  const { sut } = makeSut();
  const aluno: AlunoModel.Model = {
    id: "valid-uuid",
    email: "validemail@mail.com",
    nome: "valid name",
    turma: "valid class",
  };
  const alunoCriado = await sut.salvar(aluno);
  expect(alunoCriado.id).toBe("valid-uuid");
});

test("Espero lançar erro caso usuário já exista", async () => {
  const { sut } = makeSut();
  const aluno: AlunoModel.Model = {
    id: "valid-uuid",
    email: "validemail@mail.com",
    nome: "valid name",
    turma: "valid class",
  };
  const alunoDuplicado: AlunoModel.Model = {
    id: "valid-uuid",
    email: "validemail@mail.com",
    nome: "valid name",
    turma: "valid class",
  };
  await sut.salvar(aluno);
  vitest
    .spyOn(sut, "salvar")
    .mockRejectedValue(new Error("Usuário já existe!"));
  await expect(sut.salvar(alunoDuplicado)).rejects.toThrow();
});

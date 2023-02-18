import { AlunoRepository } from "./../aluno-repository";
import { AlunoModel } from "../../domain/entities/models/aluno-model";
import { test, expect, vitest } from "vitest";
import { prisma } from "../../main/infra/prisma/prisma";

const stubPrismaClient = () => {
  const prismaClient = prisma;
  prismaClient.$use(async (params, next) => {
    return {
      id: "valid-uuid",
      email_responsavel: "validemail@mail.com",
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
    async resgataPorId(id: string): Promise<AlunoModel.Model> {
      return {
        id,
        email_responsavel: "email@responsavel.com",
        nome: "Nome Aluno",
        turma: "1A",
        aprovado: true,
      };
    }
    async salvar(data: AlunoModel.Model): Promise<AlunoModel.Model> {
      try {
        const created = await stubPrismaClient().aluno.create({
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

test("Espero salvar novo aluno", async () => {
  const { sut } = makeSut();
  const aluno: AlunoModel.Model = {
    id: "valid-uuid",
    email_responsavel: "validemail@mail.com",
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
    email_responsavel: "validemail@mail.com",
    nome: "valid name",
    turma: "valid class",
  };
  const alunoDuplicado: AlunoModel.Model = {
    id: "valid-uuid",
    email_responsavel: "validemail@mail.com",
    nome: "valid name",
    turma: "valid class",
  };
  await sut.salvar(aluno);
  vitest
    .spyOn(sut, "salvar")
    .mockRejectedValue(new Error("Usuário já existe!"));
  await expect(sut.salvar(alunoDuplicado)).rejects.toThrow();
});

test("Espero resgatar aluno com dados corretos", async () => {
  const { sut } = makeSut();
  const response = await sut.resgataPorId("valid-id");
  expect(response).toEqual({
    id: "valid-id",
    email_responsavel: "email@responsavel.com",
    nome: "Nome Aluno",
    turma: "1A",
    aprovado: true,
  });
});

test("Espero retornar nulo caso aluno não exista", async () => {
  const { sut } = makeSut();
  vitest.spyOn(sut, "resgataPorId").mockReturnValueOnce(Promise.resolve(null));
  const response = await sut.resgataPorId("valid-id");
  expect(response).toEqual(null);
});

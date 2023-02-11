import { PrismaAlunoRepository } from "./prisma-aluno-repository";
import { AlunoRepository } from "./../aluno-repository";
import { AlunoModel } from "../../domain/entities/models/aluno-model";
import { test, beforeEach, expect } from "vitest";
import { prisma } from "../../main/infra/prisma/prisma";

beforeEach(async () => {
  await prisma.aluno.deleteMany();
});

test("Espero salvar novo aluno", async () => {
  const aluno: AlunoModel.Model = {
    id: "valid-uuid",
    email: "validemail@mail.com",
    nome: "valid name",
    turma: "valid class",
  };
  const repository: AlunoRepository = new PrismaAlunoRepository();
  const alunoCriado = await repository.salvar(aluno);
  expect(alunoCriado.id).toBe("valid-uuid");
});

test("Espero lançar erro caso usuário já exista", async () => {
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
  const repository: AlunoRepository = new PrismaAlunoRepository();
  await repository.salvar(aluno);
  await expect(repository.salvar(alunoDuplicado)).rejects.toThrow();
});

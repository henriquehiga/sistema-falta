import { PrismaProfessorRepository } from "./prisma-professor-repository";
import { ProfessorRepository } from "./../professor-repository";
import { ProfessorModel } from "../../domain/entities/models/professor-model";
import { test, afterEach, expect } from "vitest";
import { prisma } from "../../main/infra/prisma/prisma";

afterEach(async () => {
  await prisma.professor.deleteMany();
});

test("Espero salvar novo professor", async () => {
  const professor: ProfessorModel.Model = {
    id: "valid-uuid",
    email: "validemail@mail.com",
    nome: "valid name",
    disciplina: "valid class",
  };
  const repository: ProfessorRepository = new PrismaProfessorRepository();
  const professorCriado = await repository.salvar(professor);
  expect(professorCriado.id).toBe("valid-uuid");
});

test("Espero lançar erro caso professor já exista", async () => {
  const professor: ProfessorModel.Model = {
    id: "valid-uuid",
    email: "validemail@mail.com",
    nome: "valid name",
    disciplina: "valid class",
  };

  const professorDuplicado: ProfessorModel.Model = {
    id: "valid-uuid",
    email: "validemail@mail.com",
    nome: "valid name",
    disciplina: "valid class",
  };
  const repository: ProfessorRepository = new PrismaProfessorRepository();
  await repository.salvar(professor);
  await expect(repository.salvar(professorDuplicado)).rejects.toThrow();
});

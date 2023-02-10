import { NovoProfessor } from "./novo-professor";
import { ErrorResponse } from "../../shared/error-response";
import { ProfessorModel } from "../entities/models/professor-model";
import { describe, expect, test } from "vitest";
import { ProfessorRepository } from "../../data/professor-repository";
import { NovoProfessorUsecaseProtocol } from "./protocols/novo-professor-usecase-protocol";

type sutTypes = {
  sut: NovoProfessorUsecaseProtocol;
  repository: ProfessorRepository;
};

const makeSut = (): sutTypes => {
  class Repository implements ProfessorRepository {
    async salvar(data: ProfessorModel.Model): Promise<ProfessorModel.Model> {
      return data;
    }
  }
  const repository = new Repository();
  const usecase: NovoProfessorUsecaseProtocol = new NovoProfessor(repository);
  return {
    repository,
    sut: usecase,
  };
};

describe("Novo professor usecase", () => {
  test("Espero não criar professor sem nome", async () => {
    const { sut } = makeSut();
    const professorData: ProfessorModel.Create = {
      nome: "",
      disciplina: "valid disciplina",
      email: "valid@email.com",
    };
    const error = (await sut.execute(professorData)).value as ErrorResponse;
    expect(error.msg).toBe(
      "Erro ao criar professor: A quantidade de caracteres no NOME deve ser entre 3 e 64"
    );
  });
});

import { NovoProfessor } from "./novo-professor";
import { ErrorResponse } from "../../shared/error-response";
import { ProfessorModel } from "../entities/models/professor-model";
import { describe, expect, test, vitest } from "vitest";
import { ProfessorRepository } from "../../data/professor-repository";
import { NovoProfessorUsecaseProtocol } from "./protocols/novo-professor-usecase-protocol";

type sutTypes = {
  sut: NovoProfessorUsecaseProtocol;
  repository: ProfessorRepository;
};

const makeSut = (): sutTypes => {
  class MockProfessorRepository implements ProfessorRepository {
    async resgataPorId(id: string): Promise<ProfessorModel.Model> {
      return {
        id,
        email: "email@professor.com",
        nome: "Nome Professor",
      };
    }
    async salvar(data: ProfessorModel.Model): Promise<ProfessorModel.Model> {
      return data;
    }
  }
  const mockedProfessorRepository: ProfessorRepository =
    new MockProfessorRepository();
  const usecase: NovoProfessorUsecaseProtocol = new NovoProfessor(
    mockedProfessorRepository
  );
  return {
    repository: mockedProfessorRepository,
    sut: usecase,
  };
};

describe("Novo professor usecase", () => {
  test("Espero não criar professor sem nome", async () => {
    const { sut } = makeSut();
    const professorData: ProfessorModel.Create = {
      nome: "",
      email: "email@professor.com",
    };
    const error = (await sut.execute(professorData)).value as ErrorResponse;
    expect(error.msg).toBe(
      "Erro ao criar professor: A quantidade de caracteres no NOME deve ser entre 3 e 64"
    );
  });

  test("espero retornar erro caso a persistencia falhe", async () => {
    const { sut, repository } = makeSut();
    const data: ProfessorModel.Create = {
      nome: "Nome Professor",
      email: "email@professor.com",
    };
    vitest.spyOn(repository, "salvar").mockImplementation(() => {
      throw new Error("Esse professor já existe na base!");
    });
    const error = (await sut.execute(data)).value as ErrorResponse;
    expect(error.msg).toEqual(
      "Erro ao salvar professor: Esse professor já existe na base!"
    );
  });

  test("Espero criar professor corretamente", async () => {
    const { sut } = makeSut();
    const data: ProfessorModel.Create = {
      nome: "Nome Professor",
      email: "email@professor.com",
    };
    const response = await sut.execute(data);
    expect(response.isRight()).toBeTruthy();
  });
});

import { FaltaRepository } from "../../data/falta-repository";
import { ErrorResponse } from "../../shared/error-response";
import { FaltaModel } from "../entities/models/falta-model";
import { ResgataFaltasAluno } from "./resgata-faltas-aluno";
import { test, describe, expect, vitest } from "vitest";

type sutType = {
  sut: ResgataFaltasAluno;
  repository: FaltaRepository;
};

const makeSut = (): sutType => {
  class MockedFaltaRepository implements FaltaRepository {
    async salvar(data: FaltaModel.Model): Promise<FaltaModel.Model> {
      return data;
    }
    async resgataPorId(id: string): Promise<FaltaModel.Model> {
      return {
        id: "valid-id",
        aluno_id: id,
        aula_id: "valid-aula-id",
        data: new Date(),
      };
    }
    async resgataPorIdAluno(id: string): Promise<FaltaModel.Model[]> {
      return [
        {
          id: "valid-id",
          aluno_id: id,
          aula_id: "",
          data: new Date(),
        },
      ];
    }
  }
  const mockedRepository = new MockedFaltaRepository();
  const usecase = new ResgataFaltasAluno(mockedRepository);
  return {
    repository: mockedRepository,
    sut: usecase,
  };
};

describe("ResgataFaltasAlunoUsecase", () => {
  test("Espero retornar erro caso não envie o ID", async () => {
    const { sut } = makeSut();
    const id = "";
    const error = (await sut.execute(id)).value as ErrorResponse;
    expect(error.msg).toEqual("ID do aluno é obrigatório");
  });

  test("Espero retornar erro caso consulta na base falhe", async () => {
    const { sut, repository } = makeSut();
    const id = "valid-id";
    vitest
      .spyOn(repository, "resgataPorIdAluno")
      .mockRejectedValueOnce("DATABASE_ERROR");
    const error = (await sut.execute(id)).value as ErrorResponse;
    expect(error.msg).toEqual(
      "Erro ao resgatar faltas de aluno: DATABASE_ERROR"
    );
  });

  test("Espero retornar lista de faltas caso tudo ocorra corretamente", async () => {
    const { sut } = makeSut();
    const id = "valid-id";
    const faltas = (await sut.execute(id)).value as FaltaModel.Model[];
    expect(faltas).toHaveLength(1);
    expect(faltas[0].aluno_id).toBe(id);
  });
});

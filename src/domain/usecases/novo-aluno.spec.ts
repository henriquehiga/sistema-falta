import { NovoAluno } from "./novo-aluno";
import { expect, test, vitest } from "vitest";
import { NovoAlunoUsecaseProtocol } from "./protocols/novo-aluno-usecase-protocol";
import { AlunoModel } from "../entities/models/aluno-model";
import { ErrorResponse } from "../../shared/error-response";
import { AlunoRepository } from "../../data/aluno-repository";

type sutTypes = {
  sut: NovoAlunoUsecaseProtocol;
  repository: AlunoRepository;
};

const makeSut = (): sutTypes => {
  class Repository implements AlunoRepository {
    async salvar(data: AlunoModel.Model): Promise<AlunoModel.Model> {
      return data;
    }
  }
  const repository = new Repository();
  const usecase: NovoAlunoUsecaseProtocol = new NovoAluno(repository);
  return {
    repository,
    sut: usecase,
  };
};

test("espero criar Aluno", async () => {
  const { sut } = makeSut();
  const data: AlunoModel.Create = {
    nome: "Henrique Higa",
    email: "henriquehiga@hotmail.com",
    turma: "1A",
  };
  const aluno = (await sut.execute(data)).value as AlunoModel.Model;
  expect(aluno.nome).toBe("Henrique Higa");
});

test("espero retornar erro ao criar Aluno sem nome", async () => {
  const { sut } = makeSut();
  const data: AlunoModel.Create = {
    nome: "",
    email: "henriquehiga@hotmail.com",
    turma: "1A",
  };
  const error = (await sut.execute(data)).value as ErrorResponse;
  expect(error.msg).toBe(
    "Erro ao criar aluno: A quantidade de caracteres no NOME deve ser entre 3 e 64"
  );
});

test("espero retornar erro ao criar Aluno sem email válido", async () => {
  const { sut } = makeSut();
  const data: AlunoModel.Create = {
    nome: "Henrique Higa",
    email: "emailinvalido.com",
    turma: "1A",
  };
  const error = (await sut.execute(data)).value as ErrorResponse;
  expect(error.msg).toBe(
    "Erro ao criar aluno: Por favor forneça um e-mail válido"
  );
});

test("espero retornar erro caso a persistencia falhe", async () => {
  const { sut, repository } = makeSut();
  const data: AlunoModel.Create = {
    nome: "Henrique Higa",
    email: "henriquehiga@hotmail.com",
    turma: "1A",
  };
  vitest.spyOn(repository, "salvar").mockImplementation(() => {
    throw new Error("Esse aluno já existe na base!");
  });
  const error = (await sut.execute(data)).value as ErrorResponse;
  expect(error.msg).toEqual(
    "Erro ao salvar aluno: Error: Esse aluno já existe na base!"
  );
});

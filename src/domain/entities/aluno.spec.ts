import { ErrorResponse } from "../../shared/error-response";
import { Aluno } from "./aluno";
import { describe, expect, test } from "vitest";

describe("Aluno Entity", () => {
  test("espero não criar novo aluno sem id", () => {
    const error = Aluno.create({
      id: "",
      email_responsavel: "responsavel@mail.com",
      nome: "nome aluno",
      turma: "turma aluno",
    }).value as ErrorResponse;
    expect(error.msg).toBe("É obrigatório haver um ID para o aluno");
  });

  test("espero não criar novo aluno com EMAIL_RESPONSAVEL inválido", () => {
    const error = Aluno.create({
      id: "abc-123",
      email_responsavel: "",
      nome: "nome aluno",
      turma: "turma aluno",
    }).value as ErrorResponse;
    expect(error.msg).toBe(
      "A quantidade de caracteres no EMAIL_RESPONSAVEL deve ser entre 3 e 64"
    );
  });

  test("espero não criar novo aluno com EMAIL_RESPONSAVEL inválido", () => {
    const error = Aluno.create({
      id: "abc-123",
      email_responsavel: "emailinvalido.com",
      nome: "nome aluno",
      turma: "turma aluno",
    }).value as ErrorResponse;
    expect(error.msg).toBe("Por favor forneça um e-mail válido do responsável");
  });

  test("espero não criar novo aluno com nome inválido", () => {
    const error = Aluno.create({
      id: "abc-123",
      email_responsavel: "responsavel@mail.com",
      nome: "",
      turma: "turma aluno",
    }).value as ErrorResponse;
    expect(error.msg).toBe(
      "A quantidade de caracteres no NOME deve ser entre 3 e 64"
    );
  });

  test("espero criar novo aluno", () => {
    const data = {
      id: "abc-123",
      email_responsavel: "responsavel@mail.com",
      nome: "nome aluno",
      turma: "turma aluno",
    };
    const aluno = Aluno.create(data).value as Aluno;
    expect(aluno.props).toEqual(data);
  });
});

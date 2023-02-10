import { NovoProfessor } from "./novo-professor";
import { ErrorResponse } from "../../shared/error-response";
import { ProfessorModel } from "../entities/models/professor-model";
import { describe, expect, test } from "vitest";

describe("Novo professor usecase", () => {
  test("Espero não criar professor sem nome", async () => {
    const professorData: ProfessorModel.Create = {
      nome: "",
      disciplina: "valid disciplina",
      email: "valid@email.com",
    };
    const usecase = new NovoProfessor();
    const value = (await usecase.execute(professorData)).value;
    const error = (await usecase.execute(professorData)).value as ErrorResponse;
    expect(error.msg).toBe(
      "Erro ao criar professor: A quantidade de caracteres no NOME deve ser entre 3 e 64"
    );
  });
});

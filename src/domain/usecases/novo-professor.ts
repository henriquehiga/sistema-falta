import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { Aluno } from "../entities/aluno";
import { AlunoModel } from "../entities/models/aluno-model";
import { NovoAlunoUsecaseProtocol } from "./protocols/novo-aluno-usecase-protocol";
import { Uuid } from "../../libs/uuid";
import { ProfessorModel } from "../entities/models/professor-model";
import { Professor } from "../entities/professor";
import { NovoProfessorUsecaseProtocol } from "./protocols/novo-professor-usecase-protocol";

export class NovoProfessor implements NovoProfessorUsecaseProtocol {
  async execute(
    data: ProfessorModel.Create
  ): Promise<Either<ErrorResponse, ProfessorModel.Model>> {
    const professor: ProfessorModel.Model = {
      id: Uuid.generate(),
      ...data,
    };
    const professorOrError = Professor.create(professor);
    if (professorOrError.isLeft()) {
      return left({
        msg: "Erro ao criar professor: " + professorOrError.value.msg,
      });
    }
  }
}

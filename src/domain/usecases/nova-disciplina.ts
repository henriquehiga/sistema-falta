import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { Uuid } from "../../libs/uuid";
import { DisciplinaRepository } from "../../data/disciplina-repository";
import { DisciplinaModel } from "../entities/models/disciplina-model";
import { Disciplina } from "../entities/disciplina";
import { NovaDisciplinaUsecaseProtocol } from "./protocols/nova-disciplina-usecase-protocol";

export class NovaDisciplina implements NovaDisciplinaUsecaseProtocol {
  constructor(private readonly repository: DisciplinaRepository) {}

  async execute(
    data: DisciplinaModel.Create
  ): Promise<Either<ErrorResponse, DisciplinaModel.Model>> {
    const disciplina: DisciplinaModel.Model = {
      id: Uuid.generate(),
      ...data,
    };
    const disciplinaOrError = Disciplina.create(disciplina);
    if (disciplinaOrError.isLeft()) {
      return left({
        msg: "Erro ao criar disciplina: " + disciplinaOrError.value.msg,
      });
    }
    try {
      await this.repository.salvar(disciplinaOrError.value.props);
      return right(disciplinaOrError.value.props);
    } catch (error) {
      return left({
        msg: "Erro ao salvar disciplina: " + error.message,
      });
    }
  }
}

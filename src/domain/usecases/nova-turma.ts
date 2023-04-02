import { TurmaRepository } from "../../data/turma-repository";
import { Uuid } from "../../libs/uuid";
import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { TurmaModel } from "../entities/models/turma-model";
import { NovaTurmaUsecaseProtocol } from "./protocols/nova-turma-usecase-protocol";

export class NovaTurma implements NovaTurmaUsecaseProtocol {
  constructor(private readonly turmaRepo: TurmaRepository) {}

  async execute(
    data: TurmaModel.Create
  ): Promise<Either<ErrorResponse, TurmaModel.Model>> {
    const id = Uuid.generate();
    const turma: TurmaModel.Model = {
      id,
      ...data,
    };
    try {
      await this.turmaRepo.salvar(turma);
      return right(turma);
    } catch (error) {
      return left({
        msg: "Erro ao salvar turma: " + error.message,
      });
    }
  }
}

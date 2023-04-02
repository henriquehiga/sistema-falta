import { TurmaRepository } from "../../data/turma-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { TurmaModel } from "../entities/models/turma-model";
import { left, right } from "./../../shared/either";
import { ResgataTurmasUsecaseProtocol } from "./protocols/resgata-turmas-protocol";

export class ResgataTurmas implements ResgataTurmasUsecaseProtocol {
  constructor(private readonly turmaRepo: TurmaRepository) {}

  async execute(): Promise<Either<ErrorResponse, TurmaModel.Model[]>> {
    try {
      const turmas = await this.turmaRepo.resgataTurmas();
      return right(turmas);
    } catch (error) {
      return left({
        msg: "Erro ao resgatar turmas: " + error.toString(),
      });
    }
  }
}

import { TurmaRepository } from "../../data/turma-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { left, right } from "./../../shared/either";
import { DeletaTurmaUsecaseProtocol } from "./protocols/deleta-turma-usecase-protocol";

export class DeletaTurma implements DeletaTurmaUsecaseProtocol {
  constructor(private readonly turmaRepo: TurmaRepository) {}

  async execute(id: string): Promise<Either<ErrorResponse, null>> {
    try {
      await this.turmaRepo.deleta(id);
      return right(null);
    } catch (error) {
      return left({
        msg: "Erro ao excluir turma: " + error.toString(),
      });
    }
  }
}

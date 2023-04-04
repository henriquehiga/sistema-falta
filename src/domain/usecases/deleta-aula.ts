import { AulaRepository } from "../../data/aula-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { left, right } from "./../../shared/either";
import { DeletaAulaUsecaseProtocol } from "./protocols/deleta-aula-usecase-protocol";

export class DeletaAula implements DeletaAulaUsecaseProtocol {
  constructor(private readonly aulaRepo: AulaRepository) {}

  async execute(id: string): Promise<Either<ErrorResponse, null>> {
    try {
      await this.aulaRepo.deleta(id);
      return right(null);
    } catch (error) {
      return left({
        msg: "Erro ao excluir aula: " + error.toString(),
      });
    }
  }
}

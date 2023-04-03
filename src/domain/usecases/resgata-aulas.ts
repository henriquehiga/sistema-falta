import { AulaRepository } from "../../data/aula-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { AulaModel } from "../entities/models/aula-model";
import { left, right } from "./../../shared/either";
import { ResgataAulasUsecaseProtocol } from "./protocols/resgata-aulas-usecase-protocol";

export class ResgataAulas implements ResgataAulasUsecaseProtocol {
  constructor(private readonly aulaRepo: AulaRepository) {}

  async execute(): Promise<Either<ErrorResponse, AulaModel.Model[]>> {
    try {
      const aulas = await this.aulaRepo.lista();
      return right(aulas);
    } catch (error) {
      return left({
        msg: "Erro ao resgatar aulas: " + error.toString(),
      });
    }
  }
}

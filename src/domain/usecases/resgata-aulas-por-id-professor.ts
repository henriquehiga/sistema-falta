import { AulaRepository } from "../../data/aula-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { AulaModel } from "../entities/models/aula-model";
import { left, right } from "./../../shared/either";
import { ResgataAulasPorIdProfessorUsecaseProtocol } from "./protocols/resgata-aulas-por-id-professor-protocol";

export class ResgataAulasPorIdProfessor
  implements ResgataAulasPorIdProfessorUsecaseProtocol
{
  constructor(private readonly aulaRepo: AulaRepository) {}

  async execute(
    idProfessor: string
  ): Promise<Either<ErrorResponse, AulaModel.Model[]>> {
    try {
      const aulas = await this.aulaRepo.resgataPorIdProfessor(idProfessor);
      return right(aulas);
    } catch (error) {
      return left({
        msg: "Erro ao resgatar aulas: " + error.toString(),
      });
    }
  }
}

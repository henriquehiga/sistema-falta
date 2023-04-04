import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";
import { AulaModel } from "../../entities/models/aula-model";

export interface ResgataAulasPorIdProfessorUsecaseProtocol {
  execute(
    idProfessor: string
  ): Promise<Either<ErrorResponse, AulaModel.Model[]>>;
}

import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";
import { AulaModel } from "../../entities/models/aula-model";

export interface ResgataAulasUsecaseProtocol {
  execute(): Promise<Either<ErrorResponse, AulaModel.Model[]>>;
}

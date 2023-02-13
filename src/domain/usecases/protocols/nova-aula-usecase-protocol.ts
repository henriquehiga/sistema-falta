import { ErrorResponse } from "./../../../shared/error-response";
import { Either } from "../../../shared/either";
import { AulaModel } from "../../entities/models/aula-model";

export interface NovaAulaUsecaseProtocol {
  execute(
    data: AulaModel.Create
  ): Promise<Either<ErrorResponse, AulaModel.Model>>;
}

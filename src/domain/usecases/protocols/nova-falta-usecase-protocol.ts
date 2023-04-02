import { Either } from "../../../shared/either";
import { FaltaModel } from "../../entities/models/falta-model";
import { ErrorResponse } from "./../../../shared/error-response";

export interface NovaFaltaUsecaseProtocol {
  execute(
    data: Array<FaltaModel.Model>
  ): Promise<Either<ErrorResponse, FaltaModel.Model[]>>;
}

import { ErrorResponse } from "./../../../shared/error-response";
import { Either } from "../../../shared/either";
import { Falta } from "../../entities/falta";
import { FaltaModel } from "../../entities/models/falta-model";

export interface NovaFaltaUsecaseProtocol {
  execute(
    data: Array<FaltaModel.Model>
  ): Promise<Either<ErrorResponse, FaltaModel.Model[]>>;
}

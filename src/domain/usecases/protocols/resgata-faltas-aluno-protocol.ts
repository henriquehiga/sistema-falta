import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";
import { FaltaModel } from "../../entities/models/falta-model";

export interface ResgataFaltasAlunoUsecaseProtocol {
  execute(id: string): Promise<Either<ErrorResponse, FaltaModel.Model[]>>;
}

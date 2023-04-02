import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";
import { TurmaModel } from "../../entities/models/turma-model";

export interface ResgataTurmasUsecaseProtocol {
  execute(): Promise<Either<ErrorResponse, TurmaModel.Model[]>>;
}

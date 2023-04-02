import { Either } from "../../../shared/either";
import { TurmaModel } from "../../entities/models/turma-model";
import { ErrorResponse } from "./../../../shared/error-response";

export interface NovaTurmaUsecaseProtocol {
  execute(
    data: TurmaModel.Create
  ): Promise<Either<ErrorResponse, TurmaModel.Model>>;
}

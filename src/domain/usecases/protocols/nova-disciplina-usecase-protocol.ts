import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";
import { DisciplinaModel } from "../../entities/models/disciplina-model";

export interface NovaDisciplinaUsecaseProtocol {
  execute(
    data: DisciplinaModel.Create
  ): Promise<Either<ErrorResponse, DisciplinaModel.Model>>;
}

import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";
import { DisciplinaModel } from "../../entities/models/disciplina-model";

export interface ResgataDisciplinasUsecaseProtocol {
  execute(): Promise<Either<ErrorResponse, DisciplinaModel.Model[]>>;
}

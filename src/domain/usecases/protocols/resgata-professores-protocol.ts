import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";
import { ProfessorModel } from "../../entities/models/professor-model";

export interface ResgataProfessoresUsecaseProtocol {
  execute(): Promise<Either<ErrorResponse, ProfessorModel.Model[]>>;
}

import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";
import { ProfessorModel } from "../../entities/models/professor-model";

export interface NovoProfessorUsecaseProtocol {
  execute(
    data: ProfessorModel.Create
  ): Promise<Either<ErrorResponse, ProfessorModel.Model>>;
}

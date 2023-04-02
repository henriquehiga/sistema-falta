import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";
import { ProfessorModel } from "../../entities/models/professor-model";

export interface ResgataAlunosProtocol {
  execute(): Promise<Either<ErrorResponse, ProfessorModel.Model[]>>;
}

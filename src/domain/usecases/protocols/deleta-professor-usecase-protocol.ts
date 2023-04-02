import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";

export interface DeletaProfessorUsecaseProtocol {
  execute(id: string): Promise<Either<ErrorResponse, null>>;
}

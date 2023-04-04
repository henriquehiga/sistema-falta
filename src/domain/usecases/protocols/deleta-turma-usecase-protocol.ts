import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";

export interface DeletaTurmaUsecaseProtocol {
  execute(id: string): Promise<Either<ErrorResponse, null>>;
}

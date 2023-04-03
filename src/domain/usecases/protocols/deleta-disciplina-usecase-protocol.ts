import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";

export interface DeletaDisciplinaUsecaseProtocol {
  execute(id: string): Promise<Either<ErrorResponse, null>>;
}

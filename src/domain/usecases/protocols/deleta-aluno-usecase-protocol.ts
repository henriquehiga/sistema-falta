import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";

export interface DeletaAlunoUsecaseProtocol {
  execute(id: string): Promise<Either<ErrorResponse, null>>;
}

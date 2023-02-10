import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";
import { AlunoModel } from "../../entities/models/aluno-model";

export interface NovoAlunoUsecaseProtocol {
  execute(
    data: AlunoModel.Create
  ): Promise<Either<ErrorResponse, AlunoModel.Model>>;
}

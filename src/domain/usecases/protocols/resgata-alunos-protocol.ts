import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";
import { AlunoModel } from "../../entities/models/aluno-model";

export interface ResgataAlunosProtocol {
  execute(): Promise<Either<ErrorResponse, AlunoModel.Model[]>>;
}

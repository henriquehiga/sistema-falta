import { Either } from "../../../shared/either";
import { ErrorResponse } from "../../../shared/error-response";
import { AlunoModel } from "../../entities/models/aluno-model";

export interface ResgataAlunosPorTurmaProtocol {
  execute(idTurma: string): Promise<Either<ErrorResponse, AlunoModel.Model[]>>;
}

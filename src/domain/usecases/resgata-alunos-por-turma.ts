import { AlunoRepository } from "../../data/aluno-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { AlunoModel } from "../entities/models/aluno-model";
import { left, right } from "./../../shared/either";
import { ResgataAlunosPorTurmaProtocol } from "./protocols/resgata-alunos-por-turma-usecase-protocol";

export class ResgataAlunosPorTurma implements ResgataAlunosPorTurmaProtocol {
  constructor(private readonly alunoRepo: AlunoRepository) {}

  async execute(
    idTurma: string
  ): Promise<Either<ErrorResponse, AlunoModel.Model[]>> {
    try {
      const alunos = await this.alunoRepo.resgataPorTurma(idTurma);
      return right(alunos);
    } catch (error) {
      return left({
        msg: "Erro ao resgatar alunos por turma: " + error.toString(),
      });
    }
  }
}

import { AlunoRepository } from "../../data/aluno-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { left, right } from "./../../shared/either";
import { DeletaAlunoUsecaseProtocol } from "./protocols/deleta-aluno-usecase-protocol";

export class DeletaAluno implements DeletaAlunoUsecaseProtocol {
  constructor(private readonly alunoRepo: AlunoRepository) {}

  async execute(id: string): Promise<Either<ErrorResponse, null>> {
    try {
      await this.alunoRepo.excluir(id);
      return right(null);
    } catch (error) {
      return left({
        msg: "Erro ao excluir aluno: " + error.toString(),
      });
    }
  }
}

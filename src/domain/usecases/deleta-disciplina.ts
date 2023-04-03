import { DisciplinaRepository } from "../../data/disciplina-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { left, right } from "./../../shared/either";
import { DeletaDisciplinaUsecaseProtocol } from "./protocols/deleta-disciplina-usecase-protocol";

export class DeletaDisciplina implements DeletaDisciplinaUsecaseProtocol {
  constructor(private readonly disciplinaRepo: DisciplinaRepository) {}

  async execute(id: string): Promise<Either<ErrorResponse, null>> {
    try {
      await this.disciplinaRepo.deleta(id);
      return right(null);
    } catch (error) {
      return left({
        msg: "Erro ao excluir disciplina: " + error.toString(),
      });
    }
  }
}

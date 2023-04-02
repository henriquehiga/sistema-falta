import { ProfessorRepository } from "../../data/professor-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { left, right } from "./../../shared/either";
import { DeletaProfessorUsecaseProtocol } from "./protocols/deleta-professor-usecase-protocol";

export class DeletaProfessor implements DeletaProfessorUsecaseProtocol {
  constructor(private readonly professorRepo: ProfessorRepository) {}

  async execute(id: string): Promise<Either<ErrorResponse, null>> {
    try {
      await this.professorRepo.deleta(id);
      return right(null);
    } catch (error) {
      return left({
        msg: "Erro ao excluir professor: " + error.toString(),
      });
    }
  }
}

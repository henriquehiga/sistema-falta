import { ProfessorRepository } from "../../data/professor-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { ProfessorModel } from "../entities/models/professor-model";
import { left, right } from "./../../shared/either";
import { ResgataProfessoresUsecaseProtocol } from "./protocols/resgata-professores-protocol";

export class ResgataProfessores implements ResgataProfessoresUsecaseProtocol {
  constructor(private readonly professorRepo: ProfessorRepository) {}

  async execute(): Promise<Either<ErrorResponse, ProfessorModel.Model[]>> {
    try {
      const professores = await this.professorRepo.resgataProfessores();
      return right(professores);
    } catch (error) {
      return left({
        msg: "Erro ao resgatar faltas de aluno: " + error.toString(),
      });
    }
  }
}

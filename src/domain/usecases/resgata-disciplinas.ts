import { DisciplinaRepository } from "../../data/disciplina-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { DisciplinaModel } from "../entities/models/disciplina-model";
import { left, right } from "./../../shared/either";
import { ResgataDisciplinasUsecaseProtocol } from "./protocols/resgata-disciplinas-usecase-protocol";

export class ResgataDisciplinas implements ResgataDisciplinasUsecaseProtocol {
  constructor(private readonly disciplinaRepo: DisciplinaRepository) {}

  async execute(): Promise<Either<ErrorResponse, DisciplinaModel.Model[]>> {
    try {
      const disciplinas = await this.disciplinaRepo.lista();
      return right(disciplinas);
    } catch (error) {
      return left({
        msg: "Erro ao resgatar disciplinas: " + error.toString(),
      });
    }
  }
}

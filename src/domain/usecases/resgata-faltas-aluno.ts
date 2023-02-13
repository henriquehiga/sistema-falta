import { left, right } from "./../../shared/either";
import { FaltaRepository } from "../../data/falta-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { FaltaModel } from "../entities/models/falta-model";
import { ResgataFaltasAlunoUsecaseProtocol } from "./protocols/resgata-faltas-aluno-protocol";

export class ResgataFaltasAluno implements ResgataFaltasAlunoUsecaseProtocol {
  constructor(private readonly faltaRepo: FaltaRepository) {}

  async execute(
    id: string
  ): Promise<Either<ErrorResponse, FaltaModel.Model[]>> {
    if (!id) {
      return left({
        msg: "ID do aluno é obrigatório",
      });
    }
    try {
      const faltas = await this.faltaRepo.resgataPorIdAluno(id);
      return right(faltas);
    } catch (error) {
      return left({
        msg: "Erro ao resgatar faltas de aluno: " + error.toString(),
      });
    }
  }
}

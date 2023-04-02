import { AlunoRepository } from "../../data/aluno-repository";
import { Either } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { AlunoModel } from "../entities/models/aluno-model";
import { left, right } from "./../../shared/either";
import { ResgataAlunosProtocol } from "./protocols/resgata-alunos-protocol";

export class ResgataAlunos implements ResgataAlunosProtocol {
  constructor(private readonly alunoRepo: AlunoRepository) {}

  async execute(): Promise<Either<ErrorResponse, AlunoModel.Model[]>> {
    try {
      const alunos = await this.alunoRepo.lista();
      return right(alunos);
    } catch (error) {
      return left({
        msg: "Erro ao resgatar alunos: " + error.toString(),
      });
    }
  }
}

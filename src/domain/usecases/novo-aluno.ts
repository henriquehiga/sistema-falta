import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { Aluno } from "../entities/aluno";
import { AlunoModel } from "../entities/models/aluno-model";
import { NovoAlunoUsecaseProtocol } from "./protocols/novo-aluno-usecase-protocol";
import { Uuid } from "../../libs/uuid";
import { AlunoRepository } from "../../data/aluno-repository";

export class NovoAluno implements NovoAlunoUsecaseProtocol {
  constructor(private readonly repository: AlunoRepository) {}

  async execute(
    data: AlunoModel.Create
  ): Promise<Either<ErrorResponse, AlunoModel.Model>> {
    const aluno: AlunoModel.Model = {
      id: Uuid.generate(),
      ...data,
    };
    const alunoOrError = Aluno.create(aluno);
    if (alunoOrError.isLeft()) {
      return left({
        msg: "Erro ao criar aluno: " + alunoOrError.value.msg,
      });
    }
    try {
      await this.repository.salvar(alunoOrError.value.props);
      return right(alunoOrError.value.props);
    } catch (error) {
      return left({
        msg: "Erro ao salvar aluno: " + error,
      });
    }
  }
}

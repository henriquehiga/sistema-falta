import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { Uuid } from "../../libs/uuid";
import { NovaAulaUsecaseProtocol } from "./protocols/nova-aula-usecase-protocol";
import { AulaModel } from "../entities/models/aula-model";
import { Aula } from "../entities/aula";
import { AulaRepository } from "../../data/aula-repository";

export class NovaAula implements NovaAulaUsecaseProtocol {
  constructor(private readonly repository: AulaRepository) {}

  async execute(
    data: AulaModel.Create
  ): Promise<Either<ErrorResponse, AulaModel.Model>> {
    const aula: AulaModel.Model = {
      id: Uuid.generate(),
      ...data,
    };
    const aulaOrError = Aula.create(aula);
    if (aulaOrError.isLeft()) {
      return left({
        msg: "Erro ao criar aula: " + aulaOrError.value.msg,
      });
    }
    try {
      await this.repository.salvar(aulaOrError.value.props);
      return right(aulaOrError.value.props);
    } catch (error) {
      return left({
        msg: "Erro ao salvar aula: " + error.message,
      });
    }
  }
}

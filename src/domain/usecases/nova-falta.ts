import { FaltaRepository } from "../../data/falta-repository";
import { Uuid } from "../../libs/uuid";
import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { Falta } from "../entities/falta";
import { FaltaModel } from "../entities/models/falta-model";
import { NovaFaltaUsecaseProtocol } from "./protocols/nova-falta-usecase-protocol";

export class NovaFalta implements NovaFaltaUsecaseProtocol {
  constructor(private readonly repository: FaltaRepository) {}

  async execute(
    data: Array<FaltaModel.Model>
  ): Promise<Either<ErrorResponse, FaltaModel.Model[]>> {
    let faltasRealizadas: Array<FaltaModel.Model> = [];
    for (let falta of data) {
      const id = Uuid.generate();
      let faltaModel: FaltaModel.Model = {
        id,
        ...falta,
      };
      faltaModel = {
        ...faltaModel,
        data: new Date(faltaModel.data),
      };
      const faltaOrError = Falta.create(faltaModel);
      if (faltaOrError.isLeft()) {
        return left(faltaOrError.value);
      }
      let faltaPersistida: FaltaModel.Model;
      try {
        faltaPersistida = await this.repository.salvar(
          faltaOrError.value.props
        );
      } catch (err) {
        return left(err);
      }
      faltasRealizadas.push(faltaPersistida);
    }
    return right(faltasRealizadas);
  }
}

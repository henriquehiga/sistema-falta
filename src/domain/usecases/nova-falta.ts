import { AlunoRepository } from "../../data/aluno-repository";
import { AulaRepository } from "../../data/aula-repository";
import { FaltaRepository } from "../../data/falta-repository";
import { Uuid } from "../../libs/uuid";
import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { Falta } from "../entities/falta";
import { FaltaModel } from "../entities/models/falta-model";
import { NovaFaltaUsecaseProtocol } from "./protocols/nova-falta-usecase-protocol";

export class NovaFalta implements NovaFaltaUsecaseProtocol {
  constructor(
    private readonly faltaRepo: FaltaRepository,
    private readonly aulaRepo: AulaRepository,
    private readonly alunoRepo: AlunoRepository
  ) {}

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
        let aulaEncontrada = await this.aulaRepo.resgataPorId(falta.aula_id);
        if (!aulaEncontrada) {
          return left({
            msg: "A aula com id: [" + falta.aula_id + "] não existe.",
          });
        }
        let alunoEncontrado = await this.alunoRepo.resgataPorId(falta.aluno_id);
        if (!alunoEncontrado) {
          return left({
            msg: "O aluno com id: [" + falta.aula_id + "] não existe.",
          });
        }
        faltaPersistida = await this.faltaRepo.salvar(faltaOrError.value.props);
      } catch (err) {
        return left(err);
      }
      faltasRealizadas.push(faltaPersistida);
    }
    return right(faltasRealizadas);
  }
}

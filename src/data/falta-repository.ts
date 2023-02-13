import { FaltaModel } from "../domain/entities/models/falta-model";

export interface FaltaRepository {
  salvar(data: FaltaModel.Model): Promise<FaltaModel.Model>;
  resgataPorId(id: string): Promise<FaltaModel.Model>;
  resgataPorIdAluno(id: string): Promise<FaltaModel.Model[]>;
}

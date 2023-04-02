import { TurmaModel } from "../domain/entities/models/turma-model";

export interface TurmaRepository {
  salvar(data: TurmaModel.Model): Promise<TurmaModel.Model>;
  resgataPorId(id: string): Promise<TurmaModel.Model>;
  resgataTurmas(): Promise<TurmaModel.Model[]>;
  deleta(id: string): Promise<void>;
}

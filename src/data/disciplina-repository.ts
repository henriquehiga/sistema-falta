import { DisciplinaModel } from "../domain/entities/models/disciplina-model";

export interface DisciplinaRepository {
  salvar(data: DisciplinaModel.Model): Promise<DisciplinaModel.Model>;
  resgataPorId(id: string): Promise<DisciplinaModel.Model>;
}

import { AulaModel } from "../domain/entities/models/aula-model";

export interface AulaRepository {
  salvar(data: AulaModel.Model): Promise<AulaModel.Model>;
}

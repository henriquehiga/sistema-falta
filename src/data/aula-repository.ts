import { AulaModel } from "../domain/entities/models/aula-model";

export interface AulaRepository {
  salvar(data: AulaModel.Model): Promise<AulaModel.Model>;
  professorIdPorDiscilpinaId(
    professor_id: string,
    disciplina_id: string
  ): Promise<AulaModel.Model>;
}

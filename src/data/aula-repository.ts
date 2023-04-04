import { AulaModel } from "../domain/entities/models/aula-model";

export interface AulaRepository {
  salvar(data: AulaModel.Model): Promise<AulaModel.Model>;
  professorIdPorDiscilpinaId(
    professor_id: string,
    disciplina_id: string
  ): Promise<AulaModel.Model>;
  resgataPorId(id: string): Promise<AulaModel.Model>;
  lista(): Promise<AulaModel.Model[]>;
  resgataPorIdProfessor(idProfessor: string): Promise<AulaModel.Model[]>;
  deleta(id: string): Promise<void>;
}

import { ProfessorModel } from "../domain/entities/models/professor-model";

export interface ProfessorRepository {
  salvar(data: ProfessorModel.Model): Promise<ProfessorModel.Model>;
}
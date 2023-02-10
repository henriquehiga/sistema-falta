import { AlunoModel } from "../domain/entities/models/aluno-model";

export interface AlunoRepository {
  salvar(data: AlunoModel.Model): Promise<AlunoModel.Model>;
}

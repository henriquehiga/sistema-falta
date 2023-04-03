import { AlunoModel } from "../domain/entities/models/aluno-model";

export interface AlunoRepository {
  salvar(data: AlunoModel.Model): Promise<AlunoModel.Model>;
  resgataPorId(id: string): Promise<AlunoModel.Model | null>;
  lista(): Promise<AlunoModel.Model[]>;
  excluir(id: string): Promise<void>;
  resgataPorTurma(id: string): Promise<AlunoModel.Model[]>;
}

import { AlunoModel } from "../../domain/entities/models/aluno-model";
import { AlunoRepository } from "../aluno-repository";

export class InMemoryAlunoRepository implements AlunoRepository {
  private alunos: AlunoModel.Model[] = [];

  async salvar(data: AlunoModel.Model): Promise<AlunoModel.Model> {
    this.alunos.push(data);
    return data;
  }
}

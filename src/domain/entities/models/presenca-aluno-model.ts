export namespace PresencaAlunoModel {
  export type Model = {
    id: string;
    aluno_id: string;
    materia_id: string;
    faltas: number;
    presenca: number;
  };

  export type Create = PresencaAlunoModel.Model;
}

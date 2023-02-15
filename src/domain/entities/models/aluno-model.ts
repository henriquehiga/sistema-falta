export namespace AlunoModel {
  export type Model = {
    id: string;
    nome: string;
    email_responsavel: string;
    turma: string;
  };

  export type Create = Omit<AlunoModel.Model, "id">;
}

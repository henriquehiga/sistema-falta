export namespace AlunoModel {
  export type Model = {
    id: string;
    nome: string;
    aprovado?: boolean;
    email_responsavel: string;
    turma: string;
  };

  export type Create = Omit<AlunoModel.Model, "id">;
}

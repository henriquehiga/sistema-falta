export namespace AlunoModel {
  export type Model = {
    id: string;
    nome: string;
    aprovado?: boolean | null;
    email_responsavel: string;
    turma_id: string;
  };

  export type Create = Omit<AlunoModel.Model, "id">;
}

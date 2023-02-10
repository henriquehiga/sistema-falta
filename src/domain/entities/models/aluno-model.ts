export namespace AlunoModel {
  export type Model = {
    id: string;
    nome: string;
    email: string;
    turma: string;
  };

  export type Create = Omit<AlunoModel.Model, "id">;
}

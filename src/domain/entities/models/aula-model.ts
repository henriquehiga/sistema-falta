export namespace AulaModel {
  export type Model = {
    id: string;
    professor_id: string;
    disciplina_id: string;
    professor_nome: string;
    disciplina_nome: string;
  };

  export type Create = Omit<AulaModel.Model, "id">;
}

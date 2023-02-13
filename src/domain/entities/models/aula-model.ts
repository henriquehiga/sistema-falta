export namespace AulaModel {
  export type Model = {
    id: string;
    professor_id: string;
    disciplina_id: string;
  };

  export type Create = Omit<AulaModel.Model, "id">;
}

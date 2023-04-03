export namespace ProfessorModel {
  export type Model = {
    id: string;
    nome: string;
    disciplina_id: string;
  };

  export type Create = Omit<ProfessorModel.Model, "id">;
}

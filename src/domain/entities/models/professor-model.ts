export namespace ProfessorModel {
  export type Model = {
    id: string;
    nome: string;
    email: string;
    disciplina: string;
  };

  export type Create = Omit<ProfessorModel.Model, "id">;
}

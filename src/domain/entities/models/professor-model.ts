export namespace ProfessorModel {
  export type Model = {
    id: string;
    nome: string;
  };

  export type Create = Omit<ProfessorModel.Model, "id">;
}

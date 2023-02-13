export namespace FaltaModel {
  export type Model = {
    id: string;
    aluno_id: string;
    disciplina_id: string;
    data: Date;
  };
  export type Create = Omit<FaltaModel.Model, "id">;
}

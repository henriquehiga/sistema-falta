export namespace FaltaModel {
  export type Model = {
    id: string;
    aluno_id: string;
    aula_id: string;
    data: Date;
  };
  export type Create = Omit<FaltaModel.Model, "id">;
}

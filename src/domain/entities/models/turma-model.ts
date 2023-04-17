export namespace TurmaModel {
  export type Model = {
    id: string;
    nome: string;
  };
  export type Create = Omit<TurmaModel.Model, "id">;
  export type Edit = Omit<TurmaModel.Model, "id">;
}

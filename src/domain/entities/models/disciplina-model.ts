export namespace DisciplinaModel {
  export type Model = {
    id: string;
    nome: string;
  };

  export type Create = Omit<DisciplinaModel.Model, "id">;
}

export namespace MateriaModel {
  export type Model = {
    id: string;
    nome: string;
  };

  export type Create = Omit<MateriaModel.Model, "id">;
}

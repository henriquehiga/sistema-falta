export namespace DisciplinaModel {
  export type Model = {
    id: string;
    nome: string;
    qtd_aulas: number;
  };

  export type Create = Omit<DisciplinaModel.Model, "id">;
}

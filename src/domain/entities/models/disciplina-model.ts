export namespace DisciplinaModel {
  export type Model = {
    id: string;
    nome: string;
    qtd_aulas_semestre: number;
  };

  export type Create = Omit<DisciplinaModel.Model, "id">;
}

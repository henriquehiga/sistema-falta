import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { MateriaModel } from "./models/materia-model";

interface ValidateMateriaPropsResponse {
  campo?: string;
  erro?: string;
  valido: boolean;
}

export class Materia {
  private constructor(private readonly _props: MateriaModel.Model) {}

  static create(props: MateriaModel.Model): Either<ErrorResponse, Materia> {
    const propsValidas = this.validate(props);
    if (!propsValidas.valido) {
      return left({
        msg: propsValidas.erro,
      });
    }
    return right(new Materia(props));
  }

  static validate({
    id,
    nome,
  }: MateriaModel.Model): ValidateMateriaPropsResponse {
    if (!id) {
      return {
        campo: "id",
        erro: "É obrigatório haver um ID",
        valido: false,
      };
    }
    if (!nome) {
      return {
        campo: "nome",
        erro: "É obrigatório haver o NOME da matéria",
        valido: false,
      };
    }
    return {
      valido: true,
    };
  }
}

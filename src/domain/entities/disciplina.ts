import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { DisciplinaModel } from "./models/disciplina-model";

interface ValidateDisciplinaPropsResponse {
  campo?: string;
  erro?: string;
  valido: boolean;
}

export class Disciplina {
  private constructor(private readonly _props: DisciplinaModel.Model) {}

  static create(
    props: DisciplinaModel.Model
  ): Either<ErrorResponse, Disciplina> {
    const propsValidas = this.validate(props);
    if (!propsValidas.valido) {
      return left({
        msg: propsValidas.erro,
      });
    }
    return right(new Disciplina(props));
  }

  get props() {
    return this._props;
  }

  static validate({
    id,
    nome,
  }: DisciplinaModel.Model): ValidateDisciplinaPropsResponse {
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

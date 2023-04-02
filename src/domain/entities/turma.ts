import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { TurmaModel } from "./models/turma-model";

interface ValidateTurmaPropsResponse {
  campo?: string;
  erro?: string;
  valido: boolean;
}

export class Turma {
  private constructor(private readonly _props: TurmaModel.Model) {}

  static create(props: TurmaModel.Model): Either<ErrorResponse, Turma> {
    const propsValidas = this.validate(props);
    if (!propsValidas.valido) {
      return left({
        msg: propsValidas.erro,
      });
    }
    return right(new Turma(props));
  }

  get props() {
    return this._props;
  }

  static validate({ id, nome }: TurmaModel.Model): ValidateTurmaPropsResponse {
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
        erro: "É obrigatório haver o NOME da turma",
        valido: false,
      };
    }
    return {
      valido: true,
    };
  }
}

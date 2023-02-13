import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { FaltaModel } from "./models/falta-model";

interface ValidateFaltaPropsResponse {
  campo?: string;
  erro?: string;
  valido: boolean;
}

export class Falta {
  constructor(private _props: FaltaModel.Model) {}

  static create(props: FaltaModel.Model): Either<ErrorResponse, Falta> {
    const faltaValida = this.validate(props);
    if (!faltaValida) {
      return left({
        msg: faltaValida.erro,
      });
    }
    return right(new Falta(props));
  }

  get props() {
    return this._props;
  }

  static validate({
    aluno_id,
    disciplina_id,
    id,
  }: FaltaModel.Model): ValidateFaltaPropsResponse {
    if (!aluno_id) {
      return {
        valido: false,
        campo: "aluno_id",
        erro: "É obrigatório o campo ALUNO_ID",
      };
    }
    if (!disciplina_id) {
      return {
        valido: false,
        campo: "disciplina_id",
        erro: "É obrigatório o campo DISCIPLINA_ID",
      };
    }
    if (!id) {
      return {
        valido: false,
        campo: "id",
        erro: "É obrigatório o campo ID",
      };
    }
    return {
      valido: true,
    };
  }
}

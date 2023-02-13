import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { AulaModel } from "./models/aula-model";

interface ValidateAulaPropsResponse {
  campo?: string;
  erro?: string;
  valido: boolean;
}

export class Aula {
  constructor(private _props: AulaModel.Model) {}

  static create(props: AulaModel.Model): Either<ErrorResponse, Aula> {
    const aulaValida = this.validate(props);
    if (!aulaValida) {
      return left({
        msg: aulaValida.erro,
      });
    }
    return right(new Aula(props));
  }

  get props() {
    return this._props;
  }

  static validate({
    professor_id,
    disciplina_id,
    id,
  }: AulaModel.Model): ValidateAulaPropsResponse {
    if (!professor_id) {
      return {
        valido: false,
        campo: "professor_id",
        erro: "É obrigatório o campo PROFESSOR_ID",
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

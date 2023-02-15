import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { AlunoModel } from "./models/aluno-model";

interface ValidateAlunoPropsResponse {
  campo?: string;
  erro?: string;
  valido: boolean;
}

export class Aluno {
  private constructor(private readonly _props: AlunoModel.Model) {}

  static create(props: AlunoModel.Model): Either<ErrorResponse, Aluno> {
    const propsValidas = this.validate(props);
    if (!propsValidas.valido) {
      return left({
        msg: propsValidas.erro,
      });
    }
    return right(new Aluno(props));
  }

  get props() {
    return this._props;
  }

  static validate({
    id,
    nome,
    email_responsavel,
  }: AlunoModel.Model): ValidateAlunoPropsResponse {
    if (nome.length < 3 || nome.length > 64) {
      return {
        campo: "nome",
        erro: "A quantidade de caracteres no NOME deve ser entre 3 e 64",
        valido: false,
      };
    }
    if (email_responsavel.length < 3 || email_responsavel.length > 64) {
      return {
        campo: "email_responsavel",
        erro: "A quantidade de caracteres no EMAIL_RESPONSAVEL deve ser entre 3 e 64",
        valido: false,
      };
    }
    if (!email_responsavel.includes("@") || !email_responsavel.includes(".")) {
      return {
        campo: "email_responsavel",
        erro: "Por favor forneça um e-mail válido do responsável",
        valido: false,
      };
    }
    if (!id) {
      return {
        campo: "id",
        erro: "É obrigatório haver um ID para o aluno",
        valido: false,
      };
    }
    return {
      valido: true,
    };
  }
}

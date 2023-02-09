import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";

export interface ProfessorProps {
  id: string;
  nome: string;
  email: string;
  disciplina: string;
}

interface ValidateProfessorPropsResponse {
  campo?: string;
  erro?: string;
  valido: boolean;
}

export class Professor {
  private constructor(private readonly _props: ProfessorProps) {}

  static create(props: ProfessorProps): Either<ErrorResponse, Professor> {
    const propsValidas = this.validate(props);
    if (!propsValidas.valido) {
      return left({
        msg: propsValidas.erro,
      });
    }
    return right(new Professor(props));
  }

  get props() {
    return this._props;
  }

  static validate({
    id,
    nome,
    email,
  }: ProfessorProps): ValidateProfessorPropsResponse {
    if (nome.length < 3 || nome.length > 64) {
      return {
        campo: "nome",
        erro: "A quantidade de caracteres no NOME deve ser entre 3 e 64",
        valido: false,
      };
    }
    if (email.length < 3 || email.length > 64) {
      return {
        campo: "email",
        erro: "A quantidade de caracteres no EMAIL deve ser entre 3 e 64",
        valido: false,
      };
    }
    if (!email.includes("@") || !email.includes(".")) {
      return {
        campo: "email",
        erro: "Por favor forneça um e-mail válido",
        valido: false,
      };
    }
    if (!id) {
      return {
        campo: "id",
        erro: "É obrigatório haver um ID para o professor",
        valido: false,
      };
    }
    return {
      valido: true,
    };
  }
}

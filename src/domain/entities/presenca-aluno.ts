import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { PresencaAlunoModel } from "./models/presenca-aluno-model";

interface ValidatePresencaAlunoPropsResponse {
  campo?: string;
  erro?: string;
  valido: boolean;
}

export class PresencaAluno {
  private constructor(private readonly _props: PresencaAlunoModel.Model) {}

  static create(
    props: PresencaAlunoModel.Model
  ): Either<ErrorResponse, PresencaAluno> {
    const propsValidas = this.validate(props);
    if (!propsValidas.valido) {
      return left({
        msg: propsValidas.erro,
      });
    }
    props.faltas = 0;
    props.presenca = 0;
    return right(new PresencaAluno(props));
  }

  static validate({
    id,
    aluno_id,
    materia_id,
  }: PresencaAlunoModel.Model): ValidatePresencaAlunoPropsResponse {
    if (!id) {
      return {
        campo: "id",
        erro: "É obrigatório haver um ID",
        valido: false,
      };
    }
    if (!aluno_id) {
      return {
        campo: "aluno_id",
        erro: "É obrigatório haver o ID do ALUNO",
        valido: false,
      };
    }
    if (!materia_id) {
      return {
        campo: "materia_id",
        erro: "É obrigatório haver o ID da MATERIA",
        valido: false,
      };
    }
    return {
      valido: true,
    };
  }
}

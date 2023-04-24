import { NodemailerAdapter } from "../../main/adapters/nodemailer-adapter";
import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";

export class NotificaLimiteFaltas {
  constructor(private readonly mailer: NodemailerAdapter) {}

  async execute(
    aluno: string,
    emailResponsavel: string,
    qtdFaltas: number
  ): Promise<Either<ErrorResponse, null>> {
    try {
      let message =
        "O aluno " +
        aluno +
        " atingiu limite de faltas. Possui " +
        qtdFaltas +
        " faltas.";
      await this.mailer.enviar(
        emailResponsavel,
        "Atingiu faltas limite",
        message
      );
      return right(null);
    } catch (error) {
      return left({
        msg: "Erro ao enviar email.",
      });
    }
  }
}

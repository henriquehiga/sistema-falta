import { ResgataAlunosPorTurma } from "../../domain/usecases/resgata-alunos-por-turma";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class ResgataAlunosPorTurmaController implements Controller {
  constructor(private readonly usecase: ResgataAlunosPorTurma) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const { idTurma } = data.params;
    const response = await this.usecase.execute(idTurma);
    if (response.isLeft()) {
      return {
        body: response.value.msg,
        statusCode: 400,
      };
    }
    return {
      body: response.value,
      statusCode: 200,
    };
  }
}

import { ResgataFaltasAlunoUsecaseProtocol } from "../../domain/usecases/protocols/resgata-faltas-aluno-protocol";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class ResgataFaltasAlunoController implements Controller {
  constructor(private readonly usecase: ResgataFaltasAlunoUsecaseProtocol) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const { id } = data.params;
    const response = await this.usecase.execute(id);
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

import { DeletaAlunoUsecaseProtocol } from "../../domain/usecases/protocols/deleta-aluno-usecase-protocol";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class DeletaAlunoController implements Controller {
  constructor(private readonly usecase: DeletaAlunoUsecaseProtocol) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const { params } = data;
    const response = await this.usecase.execute(params.id);
    if (response.isLeft()) {
      return {
        body: response.value.msg,
        statusCode: 400,
      };
    }
    return {
      body: null,
      statusCode: 200,
    };
  }
}

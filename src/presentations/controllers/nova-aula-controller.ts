import { NovaAulaUsecaseProtocol } from "../../domain/usecases/protocols/nova-aula-usecase-protocol";
import { NovoAlunoUsecaseProtocol } from "../../domain/usecases/protocols/novo-aluno-usecase-protocol";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class NovaAulaController implements Controller {
  constructor(private readonly usecase: NovaAulaUsecaseProtocol) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const { body } = data;
    const response = await this.usecase.execute(body);
    if (response.isLeft()) {
      return {
        body: response.value.msg,
        statusCode: 400,
      };
    }
    return {
      body: response.value,
      statusCode: 201,
    };
  }
}

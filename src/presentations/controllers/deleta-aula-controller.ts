import { DeletaAulaUsecaseProtocol } from "../../domain/usecases/protocols/deleta-aula-usecase-protocol";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class DeletaAulaController implements Controller {
  constructor(private readonly usecase: DeletaAulaUsecaseProtocol) {}

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

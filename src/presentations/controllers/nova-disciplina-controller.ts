import { NovaDisciplinaUsecaseProtocol } from "../../domain/usecases/protocols/nova-disciplina-usecase-protocol";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class NovaDisciplinaController implements Controller {
  constructor(private readonly usecase: NovaDisciplinaUsecaseProtocol) {}

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

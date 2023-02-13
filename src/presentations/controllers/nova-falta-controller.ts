import { NovaFaltaUsecaseProtocol } from "../../domain/usecases/protocols/nova-falta-usecase-protocol";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class NovaFaltaController implements Controller {
  constructor(private readonly usecase: NovaFaltaUsecaseProtocol) {}

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

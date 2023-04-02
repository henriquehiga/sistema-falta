import { ResgataTurmasUsecaseProtocol } from "../../domain/usecases/protocols/resgata-turmas-protocol";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class ResgataTurmasController implements Controller {
  constructor(private readonly usecase: ResgataTurmasUsecaseProtocol) {}

  async handle(): Promise<HttpResponse> {
    const response = await this.usecase.execute();
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

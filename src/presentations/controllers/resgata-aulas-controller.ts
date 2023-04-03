import { ResgataAulasUsecaseProtocol } from "../../domain/usecases/protocols/resgata-aulas-usecase-protocol";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class ResgataAulasController implements Controller {
  constructor(private readonly usecase: ResgataAulasUsecaseProtocol) {}

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

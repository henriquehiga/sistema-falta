import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";
import { ResgataProfessoresUsecaseProtocol } from "./../../domain/usecases/protocols/resgata-professores-protocol";

export class ResgataProfessoresController implements Controller {
  constructor(private readonly usecase: ResgataProfessoresUsecaseProtocol) {}

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
      statusCode: 201,
    };
  }
}

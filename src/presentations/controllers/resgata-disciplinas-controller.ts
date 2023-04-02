import { ResgataDisciplinas } from "../../domain/usecases/resgata-disciplinas";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class ResgataDisciplinasController implements Controller {
  constructor(private readonly usecase: ResgataDisciplinas) {}

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

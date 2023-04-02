import { ResgataAlunos } from "../../domain/usecases/resgata-alunos";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class ResgataAlunosController implements Controller {
  constructor(private readonly usecase: ResgataAlunos) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const { id } = data.params;
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

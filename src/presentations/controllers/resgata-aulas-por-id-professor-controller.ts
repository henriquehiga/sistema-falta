import { ResgataAulasPorIdProfessor } from "../../domain/usecases/resgata-aulas-por-id-professor";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class ResgataAulasPorIdProfessorController implements Controller {
  constructor(private readonly usecase: ResgataAulasPorIdProfessor) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    const idProfessor = req.params.idProfessor;
    const response = await this.usecase.execute(idProfessor);
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

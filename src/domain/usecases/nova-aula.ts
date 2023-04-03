import { AulaRepository } from "../../data/aula-repository";
import { DisciplinaRepository } from "../../data/disciplina-repository";
import { ProfessorRepository } from "../../data/professor-repository";
import { Uuid } from "../../libs/uuid";
import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { Aula } from "../entities/aula";
import { AulaModel } from "../entities/models/aula-model";
import { NovaAulaUsecaseProtocol } from "./protocols/nova-aula-usecase-protocol";

export class NovaAula implements NovaAulaUsecaseProtocol {
  constructor(
    private readonly aulaRepo: AulaRepository,
    private readonly professorRepo: ProfessorRepository,
    private readonly disciplinaRepo: DisciplinaRepository
  ) {}

  async execute(
    data: AulaModel.Create
  ): Promise<Either<ErrorResponse, AulaModel.Model>> {
    const aula: AulaModel.Model = {
      id: Uuid.generate(),
      ...data,
    };
    const aulaOrError = Aula.create(aula);
    if (aulaOrError.isLeft()) {
      return left({
        msg: "Erro ao criar aula: " + aulaOrError.value.msg,
      });
    }
    try {
      let professorEncontrado = await this.professorRepo.resgataPorId(
        data.professor_id
      );
      if (!professorEncontrado) {
        return left({
          msg: "O professor com id: [" + data.professor_id + "] não existe.",
        });
      }
      let disciplinaEncontrada = await this.disciplinaRepo.resgataPorId(
        data.disciplina_id
      );
      if (!disciplinaEncontrada) {
        return left({
          msg: "A disciplina com id: [" + data.disciplina_id + "] não existe.",
        });
      }
      let disciplinaComProfessorJaExiste =
        await this.aulaRepo.professorIdPorDiscilpinaId(
          data.professor_id,
          data.disciplina_id
        );
      if (disciplinaComProfessorJaExiste) {
        return left({
          msg: "A AULA recebida já existe com essas informações!",
        });
      }
      await this.aulaRepo.salvar(aulaOrError.value.props);
      return right(aulaOrError.value.props);
    } catch (error) {
      return left({
        msg: "Erro ao realizar consultar BASE: " + error.message,
      });
    }
  }
}

import { AlunoRepository } from "../../data/aluno-repository";
import { AulaRepository } from "../../data/aula-repository";
import { DisciplinaRepository } from "../../data/disciplina-repository";
import { FaltaRepository } from "../../data/falta-repository";
import { Uuid } from "../../libs/uuid";
import { Either, left, right } from "../../shared/either";
import { ErrorResponse } from "../../shared/error-response";
import { Falta } from "../entities/falta";
import { FaltaModel } from "../entities/models/falta-model";
import { NotificaLimiteFaltas } from "./notifica-limite-faltas";
import { NovaFaltaUsecaseProtocol } from "./protocols/nova-falta-usecase-protocol";
import { ResgataFaltasAlunoUsecaseProtocol } from "./protocols/resgata-faltas-aluno-protocol";

export class NovaFalta implements NovaFaltaUsecaseProtocol {
  constructor(
    private readonly faltaRepo: FaltaRepository,
    private readonly aulaRepo: AulaRepository,
    private readonly alunoRepo: AlunoRepository,
    private readonly disciplinaRepo: DisciplinaRepository,
    private readonly resgataFaltasAlunoUsecase: ResgataFaltasAlunoUsecaseProtocol,
    private readonly notificaLimiteFalta: NotificaLimiteFaltas
  ) {}

  async execute(
    data: Array<FaltaModel.Model>
  ): Promise<Either<ErrorResponse, FaltaModel.Model[]>> {
    let faltasRealizadas: Array<FaltaModel.Model> = [];
    for (let falta of data) {
      const id = Uuid.generate();
      let faltaModel: FaltaModel.Model = {
        id,
        data: falta.data ? new Date(falta.data) : new Date(),
        ...falta,
      };
      const faltaOrError = Falta.create(faltaModel);
      if (faltaOrError.isLeft()) {
        return left(faltaOrError.value);
      }
      let faltaPersistida: FaltaModel.Model;
      try {
        let aulaEncontrada = await this.aulaRepo.resgataPorId(falta.aula_id);
        if (!aulaEncontrada) {
          return left({
            msg: "A aula com id: [" + falta.aula_id + "] não existe.",
          });
        }
        let alunoEncontrado = await this.alunoRepo.resgataPorId(falta.aluno_id);
        if (!alunoEncontrado) {
          return left({
            msg: "O aluno com id: [" + falta.aluno_id + "] não existe.",
          });
        }
        const disciplina = await this.disciplinaRepo.resgataPorId(
          aulaEncontrada.disciplina_id
        );
        const faltasAluno = await this.resgataFaltasAlunoUsecase.execute(
          alunoEncontrado.id
        );
        if (faltasAluno.isLeft()) {
          return left(faltasAluno.value);
        }
        let qtdFaltasDisciplinaSemestre: number = 0;
        faltasAluno.value.forEach((falta) => {
          if (falta.aula_id == aulaEncontrada.id) {
            qtdFaltasDisciplinaSemestre += 1;
          }
        });
        let porcentagemCriticaFaltas = disciplina.qtd_aulas * 0.65;
        if (qtdFaltasDisciplinaSemestre >= porcentagemCriticaFaltas) {
          await this.notificaLimiteFalta.execute(
            alunoEncontrado.nome,
            alunoEncontrado.email_responsavel,
            qtdFaltasDisciplinaSemestre
          );
          console.log(
            "Perigo! O Aluno possui " + qtdFaltasDisciplinaSemestre + " faltas."
          );
        }
        if (qtdFaltasDisciplinaSemestre >= disciplina.qtd_aulas * 0.75) {
          await this.alunoRepo.editar(alunoEncontrado.id, {
            ...alunoEncontrado,
            aprovado: false,
          });
        }
        faltaPersistida = await this.faltaRepo.salvar(faltaOrError.value.props);
      } catch (err) {
        return left(err);
      }
      faltasRealizadas.push(faltaPersistida);
    }
    return right(faltasRealizadas);
  }
}

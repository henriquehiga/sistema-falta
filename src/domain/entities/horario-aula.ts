class HorarioAula {
  constructor(
    public readonly id: number,
    public readonly diaSemana: string,
    public readonly horaInicio: string,
    public readonly horaFim: string,
    public readonly idTurma: number
  ) {}

  static create(data: any): HorarioAula {
    return new HorarioAula(
      data.id,
      data.diaSemana,
      data.horaInicio,
      data.horaFim,
      data.idTurma
    );
  }

  static createMany(data: any[]): HorarioAula[] {
    return data.map(HorarioAula.create);
  }

  static createFromPrisma(data: any): HorarioAula {
    return new HorarioAula(
      data.id,
      data.diaSemana,
      data.horaInicio,
      data.horaFim,
      data.idTurma
    );
  }

  static createManyFromPrisma(data: any[]): HorarioAula[] {
    return data.map(HorarioAula.createFromPrisma);
  }

  static createFromMongo(data: any): HorarioAula {
    return new HorarioAula(
      data._id,
      data.diaSemana,
      data.horaInicio,
      data.horaFim,
      data.idTurma
    );
  }
}

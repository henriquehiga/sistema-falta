import cuid from "cuid";

export class Uuid {
  static generate(): string {
    return cuid();
  }
  static generateAluno(): string {
    const timestamp = new Date().getTime();
    return timestamp.toString().slice(5);
  }
}

import cuid from "cuid";

export class Uuid {
  static generate(): string {
    return cuid();
  }
}

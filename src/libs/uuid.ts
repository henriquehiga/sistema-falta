import { randomUUID } from "crypto";
export class Uuid {
  static generate(): string {
    return randomUUID();
  }
}

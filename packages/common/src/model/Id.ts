import { v4 as uuid, validate } from "uuid";
import ErroValidacao from "../error/ErroValidacao";
import { ErrosComuns } from "../constants/ErrosComuns";

export default class Id {
  valor: string;

  constructor(valor?: string) {
    this.valor = valor ?? uuid();

    if (!Id.isValido(this.valor)) ErroValidacao.lancar(ErrosComuns.ID_INVALIDO);
  }

  igual(id: Id) {
    return this.valor === id.valor;
  }

  diferente(id: Id) {
    return this.valor !== id.valor;
  }

  static get novo() {
    return new Id();
  }

  static isValido(id: string): boolean {
    const isIdHexadecimalValido = /^[a-f\d]{24}$/i.test(id);
    return validate(id) || isIdHexadecimalValido;
  }
}

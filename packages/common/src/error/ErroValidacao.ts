import { ErrosComuns } from "../constants/ErrosComuns";


export interface ErroValidacaoProps {
  codigo?: string; // código do erro
  valor?: any; // valor que gerou o erro
  extras?: object; // dados extras para auxiliar a mostrar o erro para o usuário
  // dá pra adicionar a classe e o atributo onde foi gerado o erro
}

export default class ErroValidacao extends Error {
  readonly codigo: string;
  readonly valor?: any;
  readonly extras: any;

  constructor(readonly props?: ErroValidacaoProps) {
    super(props?.codigo ?? ErrosComuns.ERRO_DESCONHECIDO);
    this.codigo = props?.codigo ?? ErrosComuns.ERRO_DESCONHECIDO;
    this.valor = props?.valor;
    this.extras = props?.extras ?? {};
  }

  static novo(codigo?: string, valor?: any, extras?: any): ErroValidacao {
    return new ErroValidacao({ codigo, valor, extras });
  }

  static lancar(codigo?: string, valor?: any, extras?: any): never {
    throw new ErroValidacao({ codigo, valor, extras });
  }
}

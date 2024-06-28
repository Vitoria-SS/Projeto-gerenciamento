import {Status} from "./status";

export class Produto {
  id? : number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  tamanho: string;
  quantidadeEstoque: number;
  status: Status;

  constructor( 
    nome: string,
    descricao: string,
    preco: number,
    categoria: string,
    tamanho:string,
    quantidadeEstoque: number,
    status:Status,
    id? : number,
  ) {
   
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.categoria = categoria;
    this.tamanho = tamanho;
    this.quantidadeEstoque = quantidadeEstoque;
    this.status = status;
    this.id = id;
  }
}


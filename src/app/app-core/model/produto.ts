import {Status} from "./status";

export class Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  tamanho: string;
  quantidadeEstoque: number;
  status: Status;

  constructor( 
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    categoria: string,
    tamanho:string,
    quantidadeEstoque: number,
    status:Status,
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.categoria = categoria;
    this.tamanho = tamanho;
    this.quantidadeEstoque = quantidadeEstoque;
    this.status = status;
  }
}


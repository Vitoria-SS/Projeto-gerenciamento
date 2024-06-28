import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import {Status} from "../model/status";
import Dexie from "dexie";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends Dexie {
  produtos: Dexie.Table<Produto,number>;

  constructor() {
    super('ProdutoDB');
  this.version(1).stores({
    produtos: '++id,nome, descricao, preco,categoria,tamanho,quantidadeEstoque,status',
  });
  this.produtos = this.table('produtos');
  }
  async adicionarProduto(produto: Produto): Promise<number> {
    return await this.produtos.add(produto);
  }
  async buscarProdutos(): Promise<Produto[]>{
    return await this.produtos.toArray();
  }
  async removerProdutos(id:number): Promise<void>{
    return await this.produtos.delete(id);
  }
  async atualizarProdutos(id: number, produto: Produto): Promise<number>{
    return await this.produtos.update(id, produto);
  }
 
}
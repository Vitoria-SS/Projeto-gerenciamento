import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import {Status} from "../model/status";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: string[] = [];
  private produtoTeste: Produto[] =[];
  constructor() {
  }
  
  addProduto(produto: string){
    this.produtos.push(produto);
    console.log('PRODUTO CADASTRADO:', this.produtos);
  }
      //removerproduto{}
      //editarproduto{}
     //buscarproduto{}

  pupularTabelaProduto() : Produto[] {
    let status1: Status= new Status(0, 'Lançamento');
    let status2: Status= new Status(1, 'Promoção');
    let status3: Status= new Status(2, 'Indisponível');
    let produto1: Produto = new Produto(
      1,
      'Camiseta Real Madrid',
      'Camiseta oficial do Real Madrid para temporada 2024',
      79.99,
      'Camiseta',
      'M',
      167,
      status1,
    );
    let produto2: Produto = new Produto(
      2,
      'Camiseta Internacional',
      'Camiseta oficial do Internacional para temporada 2024',
      89.99,
      'camiseta',
      'G',
       85,
      status2,
    );
    this.produtoTeste.push(produto1,produto2);
    return this.produtoTeste;
  }
}

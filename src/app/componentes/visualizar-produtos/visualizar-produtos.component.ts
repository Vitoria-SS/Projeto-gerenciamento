import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../../app-core/servicos/produto-service.service";
import {Produto} from "../../app-core/model/produto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
declare var $ : any;
@Component({
  selector: 'app-visualizar-produtos',
  templateUrl:'./visualizar-produtos.component.html',
  styleUrls: ['./visualizar-produtos.component.css']
})
export class VisualizarProdutosComponent implements OnInit {

  i: number =0;
  produtos: Produto [] =[];
  form: FormGroup;
  constructor(private produtoservice: ProdutoService,
              private fb: FormBuilder) {
    this.produtos = produtoservice.pupularTabelaProduto();

    this.form = this.fb.group({
      nomeproduto: ['', Validators.required],
      categoriaproduto: ['', Validators.required],
      precoproduto: ['', Validators.required],
      tamanhoproduto: ['', Validators.required],
      quantidadeproduto:['', Validators.required],
      statusproduto: ['', Validators.required],
      descricaoProduto: ['', Validators.required]});
    
    }

  addProduto(){
    this.produtoservice.addProduto("PRODUTO" + this.i);
    this.i ++;
  }
  openModal(){
    $('#add-produto').modal('show');
  }
  closeModal(){
    $('#add-produto').modal('hide');
  }
  ngOnInit(): void {
  }

  salvarFormProduto() {
    console.log("DADOS DO PRODUTO NOVO: ", this.form.value);
  }
  
}

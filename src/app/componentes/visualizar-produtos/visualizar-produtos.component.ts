import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../../app-core/servicos/produto-service.service";
import {Produto} from "../../app-core/model/produto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
declare var $ : any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-visualizar-produtos',
  templateUrl:'./visualizar-produtos.component.html',
  styleUrls: ['./visualizar-produtos.component.css']
})
export class VisualizarProdutosComponent implements OnInit {

  i: number =0;
  produtos: any [] =[];
  produtoVisualizar: any;
  form: FormGroup;
  constructor(private produtoservice: ProdutoService,
              private fb: FormBuilder) {
    
    this.form = this.fb.group({
        nomeproduto: ['', Validators.required],
        descricaoProduto: ['', Validators.required],
        precoproduto: ['', [Validators.required, Validators.min(0)]],
        categoriaproduto: ['', Validators.required],
        tamanhoproduto: ['', Validators.required],
        quantidadeproduto: ['', [Validators.required, Validators.min(1)]],
        statusproduto: ['', Validators.required],
        id: [0]
      });
    }

  
  openModal(){
    $('#add-produto').modal('show');
  }
  closeModal(){
    $('#add-produto').modal('hide');
  }
 salvarFormProduto() {
 
    if (this.form.valid) {
      const novoProduto: Produto = new Produto(
        this.form.value.nomeproduto,
        this.form.value.descricaoProduto,
        this.form.value.precoproduto,
        this.form.value.categoriaproduto,
        this.form.value.tamanhoproduto,
        this.form.value.quantidadeproduto,
        this.form.value.statusproduto
      );
     console.log('dados do novo produto: ',novoProduto);
     this.produtoservice.adicionarProduto(novoProduto).then(reposta => {
       if(reposta > 0){
         Swal.fire('Sucesso', 'Produto salvo com sucesso!', 'success');
         this.form.reset();
         this.closeModal();
         this.listarProdutos();
       }
      }).catch(respostaError => {
        Swal.fire('Algo está errado', 'Não foi possível salvar o produto, ' +
          'tente novamente mais tarde', 'error');
        console.log(respostaError);
      });
     }else{
       console.log("CAMPOS INVALIDOS ENCONTRADOS.");
       console.log("DADOS DOS CAMPOS: ", this.form.value);

    Swal.fire('Cuidado', 'Alguns campos do formulário não estão corretos.', 'warning');
    this.marcarTodosComoClicados();
  }
}
   isCampoValido(inputNome: string) : boolean {
    const campo: any = this.form.get(inputNome);
    return campo && campo.touched && campo.invalid;
  }
  marcarTodosComoClicados(){
    Object.values(this.form.controls).forEach(campo => {
      campo.markAsTouched();
    });
  }
  listarProdutos(){
    this.produtoservice.buscarProdutos().then(resposta => {
      this.produtos= resposta;
    });
  }
  setProdutoAtual(produto: Produto){
    this.produtoVisualizar= produto;
  }
  excluirProduto(id: number){
    Swal.fire(
      {
        title: 'Tem certeza?',
        text: 'Você não poderá voltar atrás depois!',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deletar produto!',
        confirmButtonColor: '#3085d6'
      }).then((tipoBotao) => {
        if(tipoBotao.isConfirmed){
          this.produtoservice.removerProdutos(id).then(() => {
            Swal.fire('Deletado!', 'O produto foi deletada.', 'success');
            this.listarProdutos();
          });
        }
    }).catch(error => {
      console.log(error);
      Swal.fire('ERRO!', 'O Produto não foi deletada.', 'error')
    });
  }
  submitForm(){
    if(this.form.value.id > 0){
      this.editarFormProduto();
    }else{
      this.salvarFormProduto();
    }
  }
  carregarDadosProduto(produtoEditar: Produto) {
    this.form.patchValue({
      nomeproduto: produtoEditar.nome,
      descricaoProduto: produtoEditar.descricao, 
      precoproduto: produtoEditar.preco,
      categoriaproduto: produtoEditar.categoria, 
      tamanhoproduto: produtoEditar.tamanho,
      quantidadeproduto: produtoEditar.quantidadeEstoque,
      statusproduto: produtoEditar.status,
      id: produtoEditar.id
    });
    this.openModal();
  }
  editarFormProduto() {
    if (this.form.valid) {
      const editarProduto: Produto = new Produto(
        this.form.value.nomeproduto,
        this.form.value.descricaoProduto,
        this.form.value.precoproduto,
        this.form.value.categoriaproduto, 
        this.form.value.tamanhoproduto,
        this.form.value.quantidadeproduto,
        this.form.value.statusproduto
      );
        this.produtoservice.atualizarProdutos(this.form.value.id, editarProduto)
        .then(reposta => {
          if(reposta === 1){
            Swal.fire('Sucesso!','Produto editado com sucesso.','success');
            this.form.reset();
            this.closeModal();
            this.listarProdutos();
          }else{
            Swal.fire('Atenção','Nenhum produto encontrado, ou nenhuma alteração' +
              ' necessária', 'info');
          }
        }).catch(error => {
         Swal.fire('Cuidado!', 'Não foi possível editar o produto.', 'error');
      });
    }else{
      Swal.fire('Cuidado!', 'Alguns campos estão incorretos', 'warning');
      this.marcarTodosComoClicados();
    }
  }
  ngOnInit(): void {
    this.listarProdutos();
  
  }
}

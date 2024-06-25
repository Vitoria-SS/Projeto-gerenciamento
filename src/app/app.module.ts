import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { VisualizarProdutosComponent } from './componentes/visualizar-produtos/visualizar-produtos.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CadastroComponent } from './componentes/login/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    PaginaInicialComponent,
    VisualizarProdutosComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from "./componentes/pagina-inicial/pagina-inicial.component";
import {VisualizarProdutosComponent} from "./componentes/visualizar-produtos/visualizar-produtos.component";
import { CadastroComponent } from './componentes/login/cadastro/cadastro.component';

const routes: Routes = [
  { path: "", redirectTo: "pagina-inicial", pathMatch: "full" },
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "visualizar-produtos", component: VisualizarProdutosComponent },
  { path: 'login', component: CadastroComponent },
  { path: 'login/cadastro', component: CadastroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

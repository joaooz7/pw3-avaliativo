import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraViagemComponent } from './cadastra-viagem/cadastra-viagem.component';
import { HomeComponent } from './home/home.component';
import { ListaViagensComponent } from './lista-viagens/lista-viagens.component';
import { ExcluiViagemComponent } from './exclui-viagem/exclui-viagem.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'lista-viagens', component: ListaViagensComponent},
  {path: 'cadastra-viagens', component: CadastraViagemComponent},
  {path: 'excluir-viagem', component: ExcluiViagemComponent},
  {path: 'detalhes-viagens', component: DetalhesViagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

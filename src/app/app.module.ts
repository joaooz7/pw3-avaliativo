import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListaViagensComponent } from './lista-viagens/lista-viagens.component';
import { CadastraViagemComponent } from './cadastra-viagem/cadastra-viagem.component';
import { ExcluiViagemComponent } from './exclui-viagem/exclui-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListaViagensComponent,
    CadastraViagemComponent,
    ExcluiViagemComponent,
    DetalhesViagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

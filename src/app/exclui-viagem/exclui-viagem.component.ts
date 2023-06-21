import { Component } from '@angular/core';

@Component({
  selector: 'app-exclui-viagem',
  templateUrl: './exclui-viagem.component.html',
  styleUrls: ['./exclui-viagem.component.css']
})
export class ExcluiViagemComponent {
  viagens = [
    {"destino":"Acapulco", "tipo":"LAZER", "data_chegada":"08/06/2021", "data_saida":"18/06/2021"},
 ];
}

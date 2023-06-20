import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  viagens = [
    {"destino":"Acapulco", "tipo":"LAZER", "data_chegada":"08/06/2021", "data_saida":"18/06/2021"},
    {"destino":"Egito", "tipo":"LAZER", "data_chegada":"20/06/2021", "data_saida":"28/06/2021"},
    {"destino":"Nova Zelandia", "tipo":"LAZER", "data_chegada":"04/09/2021", "data_saida":"11/10/2021"},
    {"destino":"Australia", "tipo":"LAZER", "data_chegada":"04/09/2021", "data_saida":"11/10/2021"}
  ];
}

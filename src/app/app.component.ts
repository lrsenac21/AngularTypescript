import { Component } from '@angular/core';

@Component({
  selector: 'tut-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTypescript';
  aluno = {name: "Joao", isAprovado:false, isReprovado: true};
}

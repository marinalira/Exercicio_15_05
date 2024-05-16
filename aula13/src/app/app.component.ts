import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nome = "MARI";
  isButtonApertado: boolean = false;

  title = `Olá, ${this.nome}`;

  onClick(){
    this.isButtonApertado = !this.isButtonApertado;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,            // <-- tu componente es standalone
  imports: [CommonModule],     // <-- importa CommonModule para ngIf, ngFor, ngStyle
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Anghelo Goicochea';
  carrera = 'Analisis en Sistemas';
  correo = 'anghelo.goicochea@vallegrande.edu.pe';
  edad = 18;

  profileImage = 'https://lh3.googleusercontent.com/a/ACg8ocKLtwa_N-R8ipKuJtbKmaRaOXe3M7wGHSlAjYhh5C_K3wxVzUc=s288-c-no';

  hobbies = 'Leer, programar, jugar Ajedrez';
  frase = 'El único límite es tu mente.';

  mostrarExtra = false;

  backgroundColor = '#f5f5f5';

  colores = ['#f5f5f5', '#e0f7fa', '#ffe0b2', '#fce4ec'];
  colorIndex = 0;

  skills = ['HTML', 'CSS', 'JavaScript', 'Angular', 'Git'];

  cambiarColorFondo() {
    this.colorIndex = (this.colorIndex + 1) % this.colores.length;
    this.backgroundColor = this.colores[this.colorIndex];
  }
}

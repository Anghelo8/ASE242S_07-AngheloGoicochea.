import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presentacion';
  
  nombre = 'Juan Pérez';
  carrera = 'Ingeniería en Sistemas';
  correo = 'juan.perez@email.com';
  edad = 24;

  profileImage = 'https://randomuser.me/api/portraits/men/75.jpg';

  hobbies = 'Leer, programar, jugar fútbol';
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

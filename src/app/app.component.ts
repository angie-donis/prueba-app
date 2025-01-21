import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  empresas = [
    { estado: 'Activo', nombre: 'Carlos Esorche', email: 'carlos@email.com', nit: 'admin' },
    { estado: 'Activo', nombre: 'Emilia Santander', email: 'emilia@email.com', nit: 'admin' },
    { estado: 'Activo', nombre: 'Camila Alvarez', email: 'camila@email.com', nit: 'admin' },
    { estado: 'Activo', nombre: 'Laura Mendoza', email: 'laura@email.com', nit: 'admin' },
    { estado: 'Activo', nombre: 'Felix Salas', email: 'felix@email.com', nit: 'admin' },
  ];
}

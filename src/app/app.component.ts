import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaActividadesComponent } from "./components/lista-actividades/lista-actividades.component";
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaActividadesComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '4VGymListaActividades';
}

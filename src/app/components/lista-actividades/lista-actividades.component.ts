import { Component } from '@angular/core';
import { ActividadServiceService } from '../../services/actividad-service.service';
import { Actividad } from '../../models/actividad';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-lista-actividades',
  imports: [MatTableModule],
  templateUrl: './lista-actividades.component.html',
  styleUrl: './lista-actividades.component.scss'
})
export class ListaActividadesComponent {

  // Inyectamos el servicio
  constructor(private logger: ActividadServiceService) { }

  // Definimos la lista de actividades
  actividades: Actividad[] = [];

  // Recogemos la lista de actividades del servicio
  ngOnInit(): void {
    this.actividades = this.logger.getActividades();
  }

  //Definimos las columnas de la tabla 
  displayedColumns: string[] = ['Fecha', 'Lugar', 'Monitor', 'Tipo'];

  // Aplicamos la lista de actividades al dataSource de la tabla 
  dataSource = this.actividades;

}

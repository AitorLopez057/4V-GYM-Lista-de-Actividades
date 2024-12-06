// Modelo de la actividad
export class Actividad {

    // Atributos
      fecha: string;
      lugar: string;
      monitor: string;
      tipo: string;
    
      // Constructor con todos los atributos
      constructor(fecha: string, lugar: string, monitor: string, tipo: string) {
        this.fecha = fecha;
        this.lugar = lugar;
        this.monitor = monitor;
        this.tipo = tipo;
      }
    }
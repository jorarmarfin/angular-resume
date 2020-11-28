export interface About {
    me: Me;
    servicios: Servicio[];
    gustos: Gusto[];
    clientes: Cliente[];
    productos: Producto[];
    pensamiento: string;
  }
  
  export interface Producto {
    icon: string;
    nombre: string;
    costo: string;
    caracteristicas: Caracteristica[];
    link: string;
  }
  
  export interface Caracteristica {
    nombre: string;
  }
  
  export interface Cliente {
    imagen: string;
    link: string;
  }
  
  export interface Gusto {
    nombre: string;
    icon: string;
  }
  
  export interface Servicio {
    nombre: string;
    icon: string;
    descripcion: string;
  }
  
  export interface Me {
    descripcion?: string;
    edad?: number;
    residencia?: string;
    direccion?: string;
  }
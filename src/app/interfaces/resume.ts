export interface Resume {
    experiencia: Experiencia[];
    educacion: Experiencia[];
    diseno: Diseno[];
    idioma: Diseno[];
    codigo: Diseno[];
    conocimiento: Conocimiento[];
  }
  
export interface Conocimiento {
nombre: string;
}

export interface Diseno {
nombre: string;
porcentaje: string;
}

export interface Experiencia {
periodo: string;
cargo: string;
institucion: string;
detalle: string;
activo: string;
}